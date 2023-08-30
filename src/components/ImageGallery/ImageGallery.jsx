import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(image => {
        return (
          <div>
            <ImageGalleryItem imgItem={image} />
          </div>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
