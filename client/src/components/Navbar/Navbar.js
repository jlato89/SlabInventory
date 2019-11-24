import React from 'react';
import Navbar from 'react-bootstrap/NavBar';
// import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';


const Layout = (props) => {
  return (
    <Navbar
      bg='dark' 
      variant='dark'
      sticky='top'
    >
      <Navbar.Brand href='#home'>{props.title}</Navbar.Brand>
      {/* <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#features'>Features</Nav.Link>
          <Nav.Link href='#pricing'>Pricing</Nav.Link>
        </Nav> */}
      <Form inline className= 'ml-auto'>
        <FormControl
          type='text'
          size='sm'
          placeholder='Search'
        />
      </Form>
    </Navbar>
  );
}

export default Layout
