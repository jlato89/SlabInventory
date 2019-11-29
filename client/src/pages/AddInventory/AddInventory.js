import React, { Component } from 'react'
import AddInvForm from './AddInvForm/AddInvForm';

class AddInventory extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onSubmit = (formObj) => {
    formObj.material.finish = formObj.material.finish.toString();
    console.log('[AddInventory]', formObj);
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
