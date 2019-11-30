import React, { Component } from 'react'
import AddInvForm from './AddInvForm/AddInvForm';
import axios from 'axios';

class AddInventory extends Component {
  constructor(props) {
    super(props)
    this.state = { formData: '' } //! Testing purposes only
  }

  onSubmit = ({ files, material }) => {
    let formData = new FormData();
    material.finish = material.finish.toString();
    formData.append('material', material)

    files.map((file, index) => {
      formData.append(material.name + index, file);
    });

    this.setState({ formData: formData });

    axios.post('/api/addMaterial', formData)
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
