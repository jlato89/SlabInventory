import React from 'react';
import NavBar from '../Navbar/Navbar';

const Layout = (props) => {
  return (
    <>
      <NavBar slabs={props.data} submitHandler={props.filteredData} />
      <main>{props.children}</main>
    </>
  );
}

export default Layout
