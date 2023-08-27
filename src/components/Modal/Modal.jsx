import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalBox } from './Modal.styled';

const ModalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    document.addEventListener('keydown', this.handleClose);
  }

  handleClose = e => {
    const { onCloseModal } = this.props;
    if (e.currentTarget === e.target || e.code === 'Escape') {
      onCloseModal();
    }
  };

  render() {
    const { photo } = this.props;
    return createPortal(
      <Overlay onClick={this.handleClose}>
        <ModalBox>
          <img src={photo.largeImageURL} alt={photo.tags} />
        </ModalBox>
      </Overlay>,
      ModalRoot
    );
  }
}
Modal.propTypes = {
  photo: PropTypes.object.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
export default Modal;
