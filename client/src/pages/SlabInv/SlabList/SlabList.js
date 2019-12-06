import React from 'react';
import Table from 'react-bootstrap/Table';
import Moment from 'react-moment';

const SlabList = (props) => {
  const imgStringConvert = (imgFileString) => {
    const imgFileArr = imgFileString.split(',');
    return imgFileArr.length
  }
  return (
    <Table striped bordered size='sm'>
      <thead>
        <tr style={{ textAlign: 'center' }}>
          <th>Slab Name</th>
          <th>Size</th>
          <th>Images</th>
          <th>Updated</th>
        </tr>
      </thead>
      <tbody>
        {props.slabArr.map(slab => (
          <tr
            key={slab.id}
            onClick={() => props.clickedHandler(slab)}
          >
            <td>{slab.name}</td>
            <td style={{ textAlign: 'center' }}>
              {slab.size}
            </td>
            <td style={{ textAlign: 'center' }}>
              {slab.imgFileNames ?
                imgStringConvert(slab.imgFileNames)
                :
                'none'
              }
            </td>
            <td style={{ textAlign: 'right' }}>
              <Moment fromNow>{slab.updatedAt}</Moment>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default SlabList
