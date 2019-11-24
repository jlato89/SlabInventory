import React, { Component } from 'react';
import MyModal from '../../components/MyModal/MyModal';
import SlabModal from './SlabModal/SlabModal';
import Layout from '../../components/Layout/Layout';
import InventoryList from './InventoryList/InventoryList';
import AddInventory from './AddInventory/AddInventory';

class Inventory extends Component {
  constructor() {
    super();
    this.state = {
      modalShow: false,
      modalData: '',
      slabInventory: [
        {
          id: 1,
          name: 'Dark Moon 1',
          type: 'Granite',
          size: '160x80',
          updated: '2019-11-20 15:02:37',
          images: [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150'
          ]
        },
        {
          id: 2,
          name: 'Dark Moon 2',
          type: 'Granite',
          size: '160x80',
          updated: '2019-11-20 15:02:37',
          images: [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150'
          ]
        },
        {
          id: 3,
          name: 'Dark Moon 3',
          type: 'Granite',
          size: '160x80',
          updated: '2019-11-20 15:02:37',
          images: [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150'
          ]
        }
      ]
    }
  }

  handleClose = () => this.setState({ modalShow: false });
  handleShow = (slab) => {
    this.setState({
      modalShow: true,
      modalData: slab
    })
  }
  addImageHandler = () => console.log('Add Image Btn Clicked');
  editSlabHandler = () => console.log('Edit Slab Btn Clicked');

  render() {
    const { modalShow, modalData } = this.state;
    return (
      <Layout title='Inventory List' >
        <InventoryList
          slabs={this.state.slabInventory}
          clickedHandler={this.handleShow}
        />
        <MyModal
          title='Slab Details'
          showModal={modalShow}
          handleModalClose={this.handleClose}
        >
          <SlabModal 
            slab={modalData}
            addImgBtn={this.addImageHandler}
            editSlabBtn={this.editSlabHandler}
          />
        </MyModal>
        <AddInventory />
      </Layout>
    )
  }
}

export default Inventory
