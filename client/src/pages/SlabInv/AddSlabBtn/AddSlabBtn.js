import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import './AddSlabBtn.module.css';

const AddSlabBtn = (props) => {
  return (
    <footer>
      <Link to='/add-slab'>
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

export default AddSlabBtn
