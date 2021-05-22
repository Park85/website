import React from 'react';
import Nav from './Navbar';
import Footer from './Footer';
import '../styles/globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
