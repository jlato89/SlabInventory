import React, { useState } from 'react';
import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import ImagePreview from './ImagePreview/ImagePreview';
import 'react-html5-camera-photo/build/css/index.css';

const MyCamera = (props) => {
  const [dataUriArr, setDataUri] = useState([]);
  const [blobArr, setBlob] = useState([]);


  const onTakePhotoAnimationDone = (dataUri) => {
    console.log('Photo Added to State');
    const newUri = dataUriArr.concat(dataUri);
    setDataUri(newUri);

    dataURItoBlob(dataUri);
  }

  const dataURItoBlob = (dataURI) => {
    let byteString = atob(dataURI.split(',')[1]);

    //? separate out the mime component
    let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    let ab = new ArrayBuffer(byteString.length);
    let ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    let blob = new Blob([ab], { type: mimeString });

    console.log('[CreateImgFile]', blob);
    const newBlob = blobArr.concat(blob);
    setBlob(newBlob);

    if (props.onChange) {
      props.onChange(newBlob);
    }
  }


  return (
    <div className="MyCamera">
      {props.cameraActive &&
        <Camera
          onTakePhotoAnimationDone={(dataUri) => { onTakePhotoAnimationDone(dataUri) }}
          idealFacingMode={FACING_MODES.ENVIRONMENT}
          isImageMirror={false}
        />
      }
      {(dataUriArr.length !== 0) &&
        <ImagePreview material={props.material} dataUri={dataUriArr} />
      }
    </div>
  );
}

export default MyCamera;