import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
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
          <img src="/images/logo.png" alt="Logo" className="logo" />
        </IconButton>

        {/* Liens de navigation */}
        <div className="nav-links">
          <Link to="/accueil" className="link">
            <Button color="inherit">Accueil</Button>
          </Link>
          <Button color="inherit" onClick={handleMenu}>
            Opportunités
          </Button>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/Saaed/publications/categorie/1">
              Santé
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/Saaed/publications/categorie/2">
              Sociale
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/Saaed/publications/categorie/3">
              Animaux
            </MenuItem>
          </Menu>
          <Link to="/profile" className="link">
            <Button color="inherit">Profil</Button>
          </Link>
        </div>

        {/* Bouton de connexion */}
        <Link to="/s" className="link">
        <Button color="inherit">Connexion</Button></Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
