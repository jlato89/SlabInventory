import React from 'react';
import NavBar from '../Navbar/Navbar';

const Layout = (props) => {
  return (
    <>
      <header>
        <NavBar
          slabArr={props.slabArr}
          searchResults={props.filteredSlabArr}
        />
      </header>
      <main>{props.children}</main>
    </>
  );
}

export default Layout
