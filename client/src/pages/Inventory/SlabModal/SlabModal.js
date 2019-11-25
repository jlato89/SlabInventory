import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import Moment from 'react-moment';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

const SlabModal = (props) => {
  const onTakePhoto = (dataUri) => {
    // Do stuff with the dataUri photo...
    console.log('takePhoto');
    console.log(dataUri);
  }

  // const displayAsImage = (file) => {
  //   let imgURL = URL.createObjectURL(file),
  //     img = document.createElement('img');

  //   img.onload = () => {
  //     URL.revokeObjectURL(imgURL);
  //   }

  //   img.src = imgURL;
  //   document.body.appendChild(img);
  // }

  return (
    <>
      <Container>
        <Row>
          <Col><ImageCarousel images={props.slab.images} /></Col>
        </Row>
        <Row>
          <Col>Name:</Col> <Col>{props.slab.name}</Col>
        </Row>
        <Row>
          <Col>Type:</Col> <Col>{props.slab.type}</Col>
        </Row>
        <Row>
          <Col>Size:</Col> <Col>{props.slab.size}</Col>
        </Row>
        <Row>
          <Col>Last Updated:</Col>
          <Col>
            <Moment fromNow>{props.slab.updated}</Moment>
          </Col>
        </Row>
      </Container>
      <hr />
      <div className="d-flex flex-column">
        <ButtonGroup>
          <Button variant='primary' onClick={props.addImgBtn}>
            Add Image
          </Button>
          <Button variant='warning' onClick={props.editSlabBtn}>
            Edit Details
          </Button>
        </ButtonGroup>
      </div>
      <Camera
        onTakePhoto={(dataUri) => { onTakePhoto(dataUri); }}
      />
      {/* <input
        type='file'
        name='image'
        accept='image/*'
        capture='enviroment'
      /> */}
    </>
  )
}

export default SlabModal
