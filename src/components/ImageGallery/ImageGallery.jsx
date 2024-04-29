import React from 'react';
import ImageGalleryItem from '../ImageGalleryItems/ImageGalleryItem';
import styles from './ImageGallery.module.css';

function ImageGallery({ images, onImageClick }) {
  console.log(images);

  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          className={styles.galleryItem}
          image={image}
          onClick={() => onImageClick(image)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
