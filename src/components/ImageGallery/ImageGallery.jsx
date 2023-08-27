// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({ id, webformatURL }) => (
        <li key={id}>
          <img src={webformatURL} alt="title" />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
