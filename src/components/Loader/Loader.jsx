import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import styles from './Loader.module.css';

function Loader() {
  return (
    <InfinitySpin
    className={styles.loader}
    visible={true}
    width="400"
    color="pink"
    ariaLabel="infinity-spin-loading"
    />
  );
}

export default Loader;
