import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout'; // Icône de déconnexion
import './navbar.css';

const Navbar = ({ isAuthenticated, handleLogout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgba(1, 1, 1, 8)'}}>
      <Toolbar className="toolbar">
        {/* Logo */}
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img src="/images/Logo.png" alt="Logo" className="logo" />
        </IconButton>

        {/* Liens de navigation */}
        <div className="nav-links">
          <Link to="/accueil" className="link">
            <Button color="inherit">Accueil</Button>
          </Link>
          
          {/* Render navigation based on authentication status */}
          {isAuthenticated ? (
            <>
              <Button color="inherit" onClick={handleMenu}>
                Events
              </Button>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={Link} to="/sante">
                  Santé
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/sociale">
                  Sociale
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/animaux">
                  Animaux
                </MenuItem>
              </Menu>
              <Link to="/publication" className="link">
                <Button color="inherit">Publication</Button>
              </Link>
              <Link to="/profile" className="link">
                <Button color="inherit">Profil</Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/signup" className="link">
                <Button color="inherit">S'inscrire</Button>
              </Link>
              <Link to="/login" className="link">
                <Button color="inherit">Se connecter</Button>
              </Link>
            </>
          )}
        </div>

        {/* If the user is logged in, show the logout button */}
        {isAuthenticated && (
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon /> {/* Icône de déconnexion */}
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
