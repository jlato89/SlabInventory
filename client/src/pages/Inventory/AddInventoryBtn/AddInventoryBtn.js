import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import './AddInventoryBtn.module.css';

const AddInventoryBtn = (props) => {
  return (
    <footer>
      <Link to='/add-inventory'>
        <Button
          block
          size='lg'
          onClick={props.onClickHandler}
        >
          Add Inventory
        </Button>
      </Link>
    </footer>
  )
}

export default AddInventoryBtn
