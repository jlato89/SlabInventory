import React, { Component } from 'react'
import AddInvForm from './AddInvForm/AddInvForm';
import axios from 'axios';

class AddInventory extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onSubmit = (formObj) => {
    formObj.material.finish = formObj.material.finish.toString();
    console.log('[AddInventory]', formObj);

    axios.post('/api/addMaterial', formObj)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <AddInvForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default AddInventory
