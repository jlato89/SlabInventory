import React, { Component } from 'react';
import Camera, { IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';


class CreateImgFile extends Component {
  constructor() {
    super();
    this.imageNumber = 0;
  }

  onTakePhoto = (dataUri) => {
    this.createImageFile(dataUri, this.imageNumber);
    this.imageNumber += 1;
  }

  createImageFile = (dataUri, imageNumber) => {
    let blob = this.dataURItoBlob(dataUri);
    this.createImageFileFromBlob(blob, imageNumber);
  }

  dataURItoBlob = (dataURI) => {
    let byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    let ab = new ArrayBuffer(byteString.length);
    let ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    let blob = new Blob([ab], { type: mimeString });
    return blob;
  }

  createImageFileFromBlob = (blob, imageNumber) => {
    console.log('Blob: ', blob);

    const fileName = this.getFileName(imageNumber, blob.type);
    const imgFile = new File([blob], fileName, { type: blob.type });
    console.log('File Created', imgFile);

    this.props.imgFile(imgFile)
  }

  getFileName = (imageNumber, blobType) => {
    let prefix = 'photo';
    if (this.props.material) {
      const material = this.props.material.replace(/ /g, '_');
      prefix = material.toLowerCase();
    }
    const photoNumber = this.padWithZeroNumber(imageNumber, 2);
    const extention = this.getFileExtention(blobType);

    return `${prefix}-${photoNumber}.${extention}`;
  }

  padWithZeroNumber = (number, width) => {
    number = number + '';
    return number.length >= width
      ? number
      : new Array(width - number.length + 1).join('0') + number;
  }

  getFileExtention = (blobType) => {
    // by default the extention is .png
    let extention = IMAGE_TYPES.PNG;

    if (blobType === 'image/jpeg') {
      extention = IMAGE_TYPES.JPG;
    }
    return extention;
  }

  render() {
    return (
      <>
        {this.props.cameraActive &&
          <Camera onTakePhoto={(dataUri) => { this.onTakePhoto(dataUri); }} />
        }
      </>
    );
  }
}

export default CreateImgFile;