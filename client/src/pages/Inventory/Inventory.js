import React, { Component } from 'react';
import MyModal from '../../components/MyModal/MyModal';
import SlabModal from './SlabModal/SlabModal';
import Layout from '../../components/Layout/Layout';
import InventoryList from './InventoryList/InventoryList';
import AddInventoryBtn from './AddInventoryBtn/AddInventoryBtn';

class Inventory extends Component {
  constructor() {
    super();
    this.state = {
      modalShow: false,
      modalData: '',
      filteredSlabs: '',
      slabInventory: [
        {
          id: 1,
          name: 'Dark Moon',
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
          name: 'Light Moon',
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
          name: 'Blood Moon',
          type: 'Quartz',
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
  onFilterHandler = (slabArr) => {
    this.setState({ filteredSlabs: slabArr });
    console.log('[INVENTORY-FILTER]', slabArr);
  }

  render() {
    const { modalShow, modalData, slabInventory, filteredSlabs } = this.state;
    return (
      <Layout 
        title='Discover'
        data={slabInventory}
        filteredSlabs={this.onFilterHandler}
      >
        <InventoryList
          slabs={filteredSlabs ? filteredSlabs : slabInventory}
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
        <AddInventoryBtn />
      </Layout>
    )
  }
}

export default Inventory
