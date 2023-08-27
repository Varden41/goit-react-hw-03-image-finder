import React from 'react';
import PropTypes from 'prop-types';

import { GalleryItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <GalleryItem onClick={() => onClick(src)}>
      <ImageGalleryItemImage src={src} alt={alt} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
