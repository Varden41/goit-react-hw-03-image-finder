import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { GalleryItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  handleClick = photo => {
    const { handleImageClick } = this.props;
    handleImageClick(photo);
  };
  d;
  render() {
    const { photos } = this.props;
    return photos.map(photo => {
      return (
        <GalleryItem key={photo.id} onClick={() => this.handleClick(photo)}>
          <ImageGalleryItemImage
            src={photo.webformatURL}
            alt={photo.tags}
            tabIndex="0"
          />
        </GalleryItem>
      );
    });
  }
}

ImageGalleryItem.propTypes = {
  photos: PropTypes.array.isRequired,
};

export default ImageGalleryItem;
