import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import matchSorter from 'match-sorter';

const Layout = (props) => {
  const [value, setValue] = useState(null)

  let resultArr = matchSorter(props.slabs, value, { keys: ['name'] })
  console.log('[SEARCH]', resultArr);

  const submitHandler = (e) => {
    e.preventDefault();
    props.submitHandler(resultArr);
  }

  return (
    <Navbar
      bg='dark' 
      variant='dark'
      sticky='top'
    >
      <Navbar.Brand href='/'>{props.title}</Navbar.Brand>
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
          placeholder='Search'
          onChange={e => {setValue(e.target.value)}}
        />
      </Form>
    </Navbar>
  );
}

export default Layout
