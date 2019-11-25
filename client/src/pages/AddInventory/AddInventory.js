import React, { Component } from 'react'
import AddInvForm from './AddInvForm/AddInvForm';

class AddInventory extends Component {
  constructor(props) {
    super(props)
    this.state = {
       formData: {}
    }
  }
  
  onSubmit = (formObj) => {
    formObj.finish = formObj.finish.toString();
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
