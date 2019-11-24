import React from 'react';
import NavBar from '../Navbar/Navbar';

const Layout = (props) => {
  return (
    <>
      <NavBar title={props.title} />
      <main>{props.children}</main>
    </>
  );
}

export default Layout
