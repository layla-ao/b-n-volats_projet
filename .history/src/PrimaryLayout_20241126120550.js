import React from 'react';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

const PrimaryLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="main-content">{children}</div>
      <Footer />
    </>
  );
};

export default PrimaryLayout;
