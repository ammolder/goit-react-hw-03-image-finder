import { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalWindow, Backdrop } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropCkick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <Backdrop onClick={this.handleBackdropCkick}>
        <ModalWindow>{this.props.children}</ModalWindow>
      </Backdrop>,
      modalRoot
    );
  }
}
Backdrop.propTypes = {
  onClick: PropTypes.func.isRequired,
};
