import React from 'react';
import PropTypes from 'prop-types';
import { GalleryList } from './ImageGallery.styled';

function ImageGallery({ children }) {
  return <GalleryList>{children}</GalleryList>;
}

ImageGallery.propTypes = { children: PropTypes.element.isRequired };

export default ImageGallery;
