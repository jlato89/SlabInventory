import React from 'react';
import styles from './ImagePreview.module.css';

const ImagePreview = (props) => {
  const material = props.material || 'Image';
  return (
    <div className={styles.myStyle}>
      {props.dataUri.map((img, index) => (
      <img key={index} src={img} alt={material + ' ' + index}/>
      ))}
    </div>
  );
};

export default ImagePreview;