import React from 'react';
import Table from 'react-bootstrap/Table';

const InventoryList = (props) => {
  return (
    <Table striped size='sm'>
      <thead>
        <tr style={{ textAlign: 'center' }}>
          <th>Name</th>
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
          <td style={{ textAlign: 'center' }}>{slab.size}</td>
          <td style={{ textAlign: 'center' }}>{slab.images.length}</td>
          <td style={{ textAlign: 'right' }}>{slab.updated}</td>
        </tr>
      ))}
      </tbody>
    </Table>
  )
}

export default InventoryList
