import React from 'react';
import styles from './Button.module.css';
import Loader from '../Loader/Loader';

function Button ({  onLoadMore }) {
  return (
    <button className={styles.button} onClick={onLoadMore}>
      Load more...
    </button>
  );
};

export default Button;
