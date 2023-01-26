import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { Overlay, ModalContent } from './ModalStyles';

class Modal extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    onCloseModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onEscClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscClick);
  }

  onEscClick = e => {
    if (!e.key === 'Escape') return;

    this.props.onCloseModal();
  };

  onBackdropClick = e => {
    if (e.target !== e.currentTarget) return;

    this.props.onCloseModal();
  };

  render() {
    const { image } = this.props;
    return (
      <Overlay onClick={this.onBackdropClick}>
        <ModalContent>
          <img src={image} alt={image.tags} />
        </ModalContent>
      </Overlay>
    );
  }
}

export default Modal;
