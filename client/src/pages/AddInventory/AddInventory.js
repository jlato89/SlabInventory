import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import AddInvForm from './AddInvForm/AddInvForm';
import axios from 'axios';
import MyModal from '../../components/MyModal/MyModal';
import { Redirect } from 'react-router-dom';
class AddInventory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalShow: false,
      redirect: false
    }
  }

  modalClose = () => this.setState({ modalShow: false });
  setRedirect = () => this.setState({ redirect: true });
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }
  onSuccessHandler = () => {
    this.setState({ modalShow: true });
    setTimeout(() => { this.setState({ redirect: true }) }, 3000);
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

        return formData.append('image', file, fileName);
      });
    }

    axios.post('/api/addSlab', formData)
      .then(response => {
        console.log(response);
        this.onSuccessHandler()
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Layout>
        <AddInvForm onSubmit={this.onSubmit} />
        {/* TODO - remove ability to close modal */}
        <MyModal showModal={this.state.modalShow} handleModalClose={this.modalClose}>
          <center>
            <h5>Material added successfully!</h5>
            <h6>Redirecting in 3 secs</h6>
          </center>
        </MyModal>
        {this.renderRedirect()}
      </Layout>
    )
  }
}

export default AddInventory
