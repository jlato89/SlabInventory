import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCarousel from './ImageCarousel/ImageCarousel';

const StudentModal = (props) => {
  return (
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
        <Col>Last Updated:</Col> <Col>{props.slab.updated}</Col>
      </Row>
    </Container>
  )
}

export default StudentModal
