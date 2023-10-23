import { Component } from 'react';
import {
  StyledImageGalleryItem,
  StyledImageGalleryItemImage,
} from './ImageGalleryItem.styled';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = { isOpenModal: false };

  openModal = () => {
    this.setState({ isOpenModal: true });
  };

  closeModal = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { webformatURL, largeImageURL } = this.props;
    return (
      <StyledImageGalleryItem>
        <StyledImageGalleryItemImage
          onClick={this.openModal}
          src={webformatURL}
          alt="foto"
        />

        <Modal
          isOpen={this.state.isOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img src={largeImageURL} alt="foto" />
        </Modal>
      </StyledImageGalleryItem>
    );
  }
}
