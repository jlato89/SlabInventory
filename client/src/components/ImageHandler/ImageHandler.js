import React from 'react';
import styles from './ImageHandler.module.css';

const ImageHandler = (props) => {
  return (
    <div className={styles.wrapper}>
      {props.imgArr.map((img, index) => (
        <img
          className={styles.imgPreview}
          key={index}
          src={URL.createObjectURL(img)}
          alt={index}
          onClick={() => props.onDelete(img)}
        />
      ))}
    </div>
  )
}

export default ImageHandler
