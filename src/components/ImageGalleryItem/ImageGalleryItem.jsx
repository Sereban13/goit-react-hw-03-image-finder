import { Component } from 'react';
import { ImgGalletyItem } from './ImageGalleryItem.Styled';
import Modal from 'react-modal';

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
        >
          <img src={largeImageURL} alt={tags} />
        </Modal>
      </>
    );
  }
}
