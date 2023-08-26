import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import pixabayFetch, { resetPage } from '../Services/Pixabay';
import SearchBar from './Searchbar/Searchbar';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Circles } from 'react-loader-spinner';

class App extends Component {
  state = {
    photos: [],
    searchQuery: '',
    status: 'idle',
    showModal: 'false',
    activeImage: {},
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.searchQuery === '') {
      alert('Search field is empty!');
      return;
    }
    if (this.state.status === 'pending') {
      const data = await pixabayFetch(this.state.searchQuery).then(
        this.setState({ status: 'loading' })
      );
      if (prevState.searchQuery === this.state.searchQuery) {
        this.setState({ status: 'loaded' });
        return;
      }
      if (data.hits.length === 12) {
        return this.setState(
          prevState.searchQuery !== this.state.searchQuery
            ? {
                photos: data.hits,
                status: 'loaded',
              }
            : {
                photos: [...prevState.photos, ...data.hits],
                status: 'loaded',
              }
        );
      }
      if (data.hits.length === 0) {
        return this.setState({ photos: [], status: 'rejected' });
      }
      return this.setState(
        prevState.searchQuery !== this.state.searchQuery
          ? {
              photos: data.hits,
              status: 'idle',
            }
          : {
              photos: [...prevState.photos, ...data.hits],
              status: 'idle',
            }
      );
    }
  }

  onLoadMore = () => {
    this.setState({ status: 'pending' });
  };

  handleFormSubmit = searchValue => {
    this.setState({ status: 'pending', searchQuery: searchValue });
    resetPage();
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery>
          <ImageGalleryItem
            photos={this.state.photos}
            status={this.state.status}
          />
        </ImageGallery>
        {this.state.status === 'loading' && (
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
        {this.state.status === 'rejected' &&
          alert('Sorry pal, no pictures for you today')}
        {this.state.status === 'loaded' && (
          <Button onLoadMore={this.onLoadMore} />
        )}
      </>
    );
  }
}

export default App;
