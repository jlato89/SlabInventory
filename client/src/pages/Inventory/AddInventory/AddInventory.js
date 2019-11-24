import React from 'react';
import Button from 'react-bootstrap/Button';

import './AddInventory.module.css';

const AddInventory = (props) => {
  return (
    <footer>
      <Button
        block
        size='lg'
        onClick={props.onClickHandler}
      >
        Add Inventory
      </Button>
    </footer>
  )
}

export default AddInventory
