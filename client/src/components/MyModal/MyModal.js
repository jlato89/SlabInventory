import React from 'react';
import Modal from 'react-bootstrap/Modal';

const MyModal = props => {
  return (
    <Modal 
      show={props.showModal} 
      onHide={props.handleModalClose}
    >
      {props.title &&
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
      }
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
};

export default MyModal;
