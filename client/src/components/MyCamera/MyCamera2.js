import React, { Component } from 'react';
import ImageHandler from '../ImageHandler/ImageHandler';
import styles from './MyCamera2.module.css';

class MyCamera2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageArr: []
    }
  }
  handleDelete = (img) => {
    const newArr = this.state.imageArr.filter(item => item.name !== img.name)
    this.setState({ imageArr: newArr })
    this.props.onChange(newArr)
  }
  onPhotoTaken = (e) => {
    const img = e.target.files[0];
    console.log('[MYCAMERA2]', img);

    const newArr = this.state.imageArr.concat(img)
    this.setState({ imageArr: newArr })
    this.props.onChange(newArr)
  }

  render() {
    return (
      <>
        <label
          className={styles.cameraBtn}
          htmlFor='cameraInput'
        >Take Photo</label>
        <input
          className={styles.cameraInput}
          id='cameraInput'
          type='file'
          accept='image/*'
          onChange={this.onPhotoTaken}
        />
        <ImageHandler imgArr={this.state.imageArr} onDelete={this.handleDelete} />
      </>
    )
  }
}

export default MyCamera2
