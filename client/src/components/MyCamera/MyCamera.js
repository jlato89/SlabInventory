import React, { Component } from 'react';
import Camera, { IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';


class MyCamera extends Component {
  constructor() {
    super();
    this.imageNumber = 0;
  }
  onTakePhoto(dataUri) {
    this.downloadImageFile(dataUri, this.imageNumber);
    this.imageNumber += 1;
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

downloadImageFileFomBlob = (blob, imageNumber) => {
  console.log('blob: ', blob);
  console.log('number: ', imageNumber);
  window.URL = window.webkitURL || window.URL;

  let anchor = document.createElement('a');
  anchor.download = this.getFileName(imageNumber, blob.type);
  anchor.href = window.URL.createObjectURL(blob);
  let mouseEvent = document.createEvent('MouseEvents');
  mouseEvent.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
  anchor.dispatchEvent(mouseEvent);
}

downloadImageFile = (dataUri, imageNumber) => {
  let blob = this.dataURItoBlob(dataUri);
  this.downloadImageFileFomBlob(blob, imageNumber);
}

  render() {
    return (
      <>
        <Camera
          onTakePhoto={(dataUri) => { this.onTakePhoto(dataUri); }}
          imageType={IMAGE_TYPES.PNG}
        />
      </>
    );
  }
}

export default MyCamera;