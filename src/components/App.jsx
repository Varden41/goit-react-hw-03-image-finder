import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import pixabayFetch, { resetPage } from '../Services/Pixabay';
import SearchBar from './Searchbar/Searchbar';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    photos: [],
    searchQuery: '',
    status: 'idle',
    showModal: 'false',
    clickedImage: {},
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.status === 'pending') {
      const data = await pixabayFetch(this.state.searchQuery).then(
        this.setState({ status: 'loading' })
      );
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

  handleFormSubmit = searchValue => {
    resetPage();
    this.setState({ status: 'pending', searchQuery: searchValue });
  };

  // onSubmitData = data => {
  //   this.setState({ photos: data });
  // };

  // componentDidMount() {
  //   const dataCatch = pixabayFetch('dog').then(data =>
  //     this.onSubmitData(data.hits)
  //   );
  // }

  // handleFormSubmit = searchQuery => {
  //   this.setState({ searchQuery });
  // };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery>
          <ImageGalleryItem photos={this.state.photos} />
        </ImageGallery>
      </>
    );
  }
}

export default App;
