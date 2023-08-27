const ImageGalleryItem = images => {
  return (
    <div>
      <li key={id}>
        {images.map(({ id, webformatURL }) => {
          return (
            <>
              <img src={webformatURL} alt="" />;
            </>
          );
        })}
      </li>
    </div>
  );
};

export default ImageGalleryItem;
