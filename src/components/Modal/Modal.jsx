import React from 'react';
import styles from './Modal.module.css';

function Modal ({ image, onCloseModal }) {

  return (
    <div className={styles.overlay} onClick={onCloseModal}>
      <div className={styles.modal}>
        <img src={image.largeImageURL} alt={image.tags} />
      </div>
    </div>
  );
};

export default Modal;