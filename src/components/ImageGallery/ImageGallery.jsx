import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(image => {
        return (
          <>
            <ImageGalleryItem imgItem={image} />
          </>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
