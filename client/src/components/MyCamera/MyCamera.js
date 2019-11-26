import React, { Component } from 'react';
import { Camera } from 'react-html5-camera-photo';
import ImagePreview from './ImagePreview/ImagePreview';
import 'react-html5-camera-photo/build/css/index.css';

class MyCamera extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { dataUri: [] };
    this.onTakePhotoAnimationDone = this.onTakePhotoAnimationDone.bind(this);
  }

  onTakePhotoAnimationDone(dataUri) {
    console.log('Photo Added to State');
    const joined = this.state.dataUri.concat(dataUri);
    this.setState({ dataUri: joined });
  }

  render() {
    return (
      <div className="MyCamera">
        {this.props.cameraActive &&
        <Camera onTakePhotoAnimationDone={this.onTakePhotoAnimationDone} />
        }
        {(this.state.dataUri.length !== 0) &&
        <ImagePreview material={this.props.material} dataUri={this.state.dataUri} />
        }
      </div>
    );
  }
}

export default MyCamera;