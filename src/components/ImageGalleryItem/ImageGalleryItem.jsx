import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal';
import { Item, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleClick = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.showModal);
  };

  render() {
    const { data } = this.props;
    const { showModal } = this.state;

    return (
      <Item>
        <Image onClick={this.toggleModal} src={data.webformatURL} alt="" />
        {showModal === true && (
          <Modal onClose={this.toggleModal}>
            <img src={data.largeImageURL} alt={data.tags} width="100%" />
          </Modal>
        )}
      </Item>
    );
  }
}
Image.propTypes = {
  onClick: PropTypes.func.isRequired,
};
