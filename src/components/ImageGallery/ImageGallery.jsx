import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

const ImageGallery = ({ photos, handleImageClick }) => {
  return (
    <GalleryList>
      {photos.map(photo => {
        return (
          <ImageGalleryItem
            key={photo.id}
            src={photo.webformatURL}
            alt={photo.tags}
            onClick={() => handleImageClick(photo)}
          />
        );
      })}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
  handleImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
