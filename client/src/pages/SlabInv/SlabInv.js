import React, { Component } from 'react';
import MyModal from '../../components/MyModal/MyModal';
import SlabModal from './SlabModal/SlabModal';
import Layout from '../../components/Layout/Layout';
import SlabList from './SlabList/SlabList';
import AddSlabBtn from './AddSlabBtn/AddSlabBtn';
import axios from 'axios';

class SlabInv extends Component {
  constructor() {
    super();
    this.state = {
      modalShow: false,
      modalData: '',
      slabArr: [],
      searchResults: ''
    }
  }

  componentDidMount() {
    axios.get('/api/slabs')
      .then(slabs => {
        console.log('[INVENTORY]', slabs.data);
        this.setState({ slabArr: slabs.data })
      })
      .catch(err => console.log(err.response));
  }

  modalClose = () => this.setState({ modalShow: false });
  modalOpen = (slab) => {
    this.setState({ modalShow: true, modalData: slab })
  }
  addImageHandler = () => console.log('Add Image Btn Clicked');
  editSlabHandler = () => console.log('Edit Slab Btn Clicked');

  filteredArrHandler = (slabArr) => {
    this.setState({ searchResults: slabArr });
    console.log('[INVENTORY Filter]', slabArr);
  }

  render() {
    const { modalShow, modalData, slabArr, searchResults } = this.state;
    return (
      <Layout slabArr={slabArr} filteredSlabArr={this.filteredArrHandler}>
        <SlabList
          slabArr={searchResults ? searchResults : slabArr}
          clickedHandler={this.modalOpen}
        />
        <MyModal
          title='Slab Details'
          showModal={modalShow}
          handleModalClose={this.modalClose}
        >
          <SlabModal
            slab={modalData}
            addImgBtn={this.addImageHandler}
            editSlabBtn={this.editSlabHandler}
          />
        </MyModal>
        <AddSlabBtn />
      </Layout>
    )
  }
}

export default SlabInv
