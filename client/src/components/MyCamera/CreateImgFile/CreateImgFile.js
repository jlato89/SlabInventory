import React, { useState } from 'react';
import Camera, { IMAGE_TYPES } from 'react-html5-camera-photo';
import ImagePreview from '../ImagePreview/ImagePreview';
import 'react-html5-camera-photo/build/css/index.css';


const CreateImgFile = (props) => {
  const [imgNumber, setImgNumber] = useState(0);
  const [dataUriArr, setDataUri] = useState([])

  const onTakePhotoAnimationDone = (dataUri) => {
    console.log('Photo Added to State');
    const joined = dataUriArr.concat(dataUri);
    setDataUri(joined);

    createImageFile(dataUri, imgNumber);
    setImgNumber(imgNumber + 1);
  }

  const createImageFile = (dataUri, imgNumber) => {
    let blob = dataURItoBlob(dataUri);
    createImageFileFromBlob(blob, imgNumber);
  }

  const dataURItoBlob = (dataURI) => {
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

  const createImageFileFromBlob = (blob, imgNumber) => {
    console.log('Blob: ', blob);

    const fileName = getFileName(imgNumber, blob.type);
    const imgFile = new File([blob], fileName, { type: blob.type });

    // Send to parent state
    props.imgFile(imgFile)
  }

  const getFileName = (imgNumber, blobType) => {
    let prefix = 'photo';
    if (props.material) {
      const material = props.material.replace(/ /g, '_');
      prefix = material.toLowerCase();
    }
    const photoNumber = padWithZeroNumber(imgNumber, 2);
    const extention = getFileExtention(blobType);

    return `${prefix}-${photoNumber}.${extention}`;
  }

  const padWithZeroNumber = (number, width) => {
    number = number + '';
    return number.length >= width
      ? number
      : new Array(width - number.length + 1).join('0') + number;
  }

  const getFileExtention = (blobType) => {
    // by default the extention is .png
    let extention = IMAGE_TYPES.PNG;

    if (blobType === 'image/jpeg') {
      extention = IMAGE_TYPES.JPG;
    }
    return extention;
  }

  return (
    <>
      {props.cameraActive &&
        <Camera 
          onTakePhotoAnimationDone={(dataUri) => { onTakePhotoAnimationDone(dataUri); }}
        />
      }
      {(dataUriArr.length !== 0) &&
        <ImagePreview material={props.material} dataUri={dataUriArr} />
      }
    </>
  );
}

export default CreateImgFile;