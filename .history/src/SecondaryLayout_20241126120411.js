import React from 'react';

const SecondaryLayout = ({ children }) => {
  return (
    <>
      <nav className="navbar-secondary">
        <h1 className="logo">Gestion des utilisateurs</h1>
      </nav>
      <div className="secondary-content">{children}</div>
    </>
  );
};

export default SecondaryLayout;
