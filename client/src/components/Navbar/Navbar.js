import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import matchSorter from 'match-sorter';

const Layout = (props) => {
  const [value, setValue] = useState(null)

  let resultArr = matchSorter(props.slabArr, value, { keys: ['name', 'type'] })
  console.log('[NAVBAR Search]', resultArr);

  const submitHandler = (e) => {
    e.preventDefault();
    props.searchResults(resultArr);
  }

  return (
    <Navbar
      bg='dark'
      variant='dark'
      sticky='top'
    >
      <Navbar.Brand href='/'>Discover</Navbar.Brand>
      {/* <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#features'>Features</Nav.Link>
          <Nav.Link href='#pricing'>Pricing</Nav.Link>
        </Nav> */}
      <Form
        inline
        className='ml-auto'
        onSubmit={submitHandler}
      >
        <FormControl
          type='input'
          size='sm'
          placeholder='Search (WIP)'
          onChange={e => { setValue(e.target.value) }}
        />
      </Form>
    </Navbar>
  );
}

export default Layout
