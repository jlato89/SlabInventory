import React from 'react';
import NavBar from '../Navbar/Navbar';

const Layout = (props) => {
  return (
    <>
      <NavBar slabArr={props.slabArr} searchResults={props.filteredSlabArr} />
      <main>{props.children}</main>
    </>
  );
}

export default Layout
