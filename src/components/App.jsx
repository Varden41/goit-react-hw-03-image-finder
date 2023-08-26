import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import pixabayFetch, { resetPage } from '../Services/Pixabay';
import { Circles } from 'react-loader-spinner';
import SearchBar from './Searchbar/Searchbar';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    photos: [],
    searchQuery: '',
    status: 'idle',
    showModal: false,
    activeImage: {},
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.status === 'pending') {
      const data = await pixabayFetch(this.state.searchQuery).then(
        this.setState({ status: 'loading' })
      );
      if (this.state.searchQuery === '') {
        alert('Search field is empty!');
        this.setState({ status: 'idle' });
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
  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  onLoadMore = () => {
    this.setState({ status: 'pending' });
  };

  handleFormSubmit = searchValue => {
    this.setState({ status: 'pending', searchQuery: searchValue });
    resetPage();
  };

  handleImageClick = focusedImage => {
    this.setState({ activeImage: focusedImage, showModal: true });
  };

  render() {
    const { showModal, photos, status } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery>
          <ImageGalleryItem
            photos={photos}
            handleImageClick={this.handleImageClick}
          />
        </ImageGallery>
        {status === 'loading' && (
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
        {status === 'rejected' && alert('Sorry pal, no pictures for you today')}
        {status === 'loaded' && <Button onLoadMore={this.onLoadMore} />}
        {showModal &&
          createPortal(
            <Modal
              photo={this.state.activeImage}
              onCloseModal={this.onCloseModal}
            ></Modal>,
            document.body
          )}
      </>
    );
  }
}

export default App;
