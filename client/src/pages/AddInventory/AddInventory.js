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
    for (let key in material) {
      if (material.hasOwnProperty(key)) {
        formData.append(key, material[key])
      }
    }

    if (files) {
      files.map((file) => {
        const materialName = material.name.trim().replace(/ /g, '_');
        const randomNum = Math.floor(Math.random() * 1001);
        let ext = '.png';
        if (file.type === 'image/jpeg') { ext = '.jpg' }
        const fileName = materialName + randomNum + ext;
        formData.append('image', file, fileName);
      });
    }

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
