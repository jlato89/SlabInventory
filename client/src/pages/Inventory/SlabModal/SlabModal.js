import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import Moment from 'react-moment';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const SlabModal = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            {props.slab.imgFileNames ?
              <ImageCarousel images={props.slab.imgFileNames} />
              :
              <p style={{ textAlign: 'center' }}>No Images</p>
            }
          </Col>
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
    </>
  )
}

export default SlabModal
