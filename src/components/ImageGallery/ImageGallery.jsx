import React, { Component } from 'react';
import PropTypes from 'prop-types';

function ImageGallery({ children }) {
  return <ul>{children}</ul>;
}

ImageGallery.propTypes = { children: PropTypes.element.isRequired };

export default ImageGallery;
