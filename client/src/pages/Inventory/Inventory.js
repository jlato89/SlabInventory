import React, { Component } from 'react';
import MyModal from '../../components/MyModal/MyModal';
import SlabModal from './SlabModal/SlabModal';
import Layout from '../../components/Layout/Layout';
import InventoryList from './InventoryList/InventoryList';
import AddInventoryBtn from './AddInventoryBtn/AddInventoryBtn';
import axios from 'axios';

class Inventory extends Component {
  constructor() {
    super();
    this.state = {
      modalShow: false,
      modalData: '',
      filteredSlabs: '',
      slabs: []
    }
  }

  componentDidMount() {
    axios.get('/api/slabs')
      .then(slabs => {
        console.log('[INVENTORY]', slabs.data);
        this.setState({ slabs: slabs.data })
      })
      .catch(err => console.log(err.response));
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
    const { modalShow, modalData, slabs, filteredSlabs } = this.state;
    return (
      <Layout data={slabs} filteredData={this.onFilterHandler}>
        <InventoryList
          slabs={filteredSlabs ? filteredSlabs : slabs}
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
