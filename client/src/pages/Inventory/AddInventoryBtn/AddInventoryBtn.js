import React from 'react';
import Button from 'react-bootstrap/Button';

import './AddInventoryBtn.module.css';

const AddInventoryBtn = (props) => {
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

export default AddInventoryBtn
