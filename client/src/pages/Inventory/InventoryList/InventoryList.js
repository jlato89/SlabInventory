import React from 'react';
import Table from 'react-bootstrap/Table';
import Moment from 'react-moment';

const InventoryList = (props) => {
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
      {props.slabs.map(slab => (
        <tr 
          key={slab.id}
          onClick={() => props.clickedHandler(slab)}
        >
          <td>{slab.name}</td>
          <td style={{ textAlign: 'center' }}>
            {slab.size}
          </td>
          <td style={{ textAlign: 'center' }}>
            {slab.images.length}
          </td>
          <td style={{ textAlign: 'right' }}>
            <Moment fromNow>{slab.updated}</Moment>
          </td>
        </tr>
      ))}
      </tbody>
    </Table>
  )
}

export default InventoryList
