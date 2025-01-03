import React from 'react';
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Navbar Section */}
      <Navbar />
      
      {/* Main content */}
      <div className="main-content">
        {children}
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Layout;
