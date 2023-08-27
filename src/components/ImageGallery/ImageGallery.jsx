import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

class ImageGallery extends Component {
  handleClick = photo => {
    const { handleImageClick } = this.props;

    handleImageClick(photo);
  };

  render() {
    const { photos } = this.props;
    return (
      <GalleryList>
        {photos.map(photo => {
          return (
            <ImageGalleryItem
              key={photo.id}
              src={photo.webformatURL}
              alt={photo.tags}
              onClick={() => this.handleClick(photo)}
            />
          );
        })}
      </GalleryList>
    );
  }
}

ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
};

export default ImageGallery;
