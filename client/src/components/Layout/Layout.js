import React from 'react';
import NavBar from '../Navbar/Navbar';

const Layout = (props) => {
  return (
    <>
      <NavBar />
      <main>{props.children}</main>
    </>
  );
}

export default Layout
