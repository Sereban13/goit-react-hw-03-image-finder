import { Component } from 'react';
import { ImgGalletyItem } from './ImageGalleryItem.Styled';
import Modal from 'react-modal';

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
  content: {
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
  },
};

Modal.setAppElement('#root');
export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const {
      imgItem: { webformatURL, tags, largeImageURL },
    } = this.props;

    const { isModalOpen } = this.state;
    return (
      <>
        <ImgGalletyItem key={this.props.imgItem.id} onClick={this.openModal}>
          <img src={webformatURL} alt={tags} />
        </ImgGalletyItem>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={modalStyles}
        >
          <img src={largeImageURL} alt={tags} />
        </Modal>
      </>
    );
  }
}
