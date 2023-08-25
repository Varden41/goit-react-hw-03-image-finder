import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    const { photos } = this.props;
    return photos.map(photo => {
      return (
        <li key={photo.id}>
          <img src={photo.webformatURL} alt={photo.tags} />
        </li>
      );
    });
  }
}

ImageGalleryItem.propTypes = {
  photos: PropTypes.array.isRequired,
};

export default ImageGalleryItem;
