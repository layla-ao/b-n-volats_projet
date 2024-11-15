import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  logo: {
    height: '40px',
    marginRight: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginRight: '15px',
  },
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        {/* Logo */}
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img src="/path-to-logo.png" alt="Logo" className={classes.logo} />
        </IconButton>
        
        {/* Liens de navigation */}
        <div>
          <Link to="/" className={classes.link}>
            <Button color="inherit">Accueil</Button>
          </Link>
          <Button color="inherit" onClick={handleMenu}>
            Catégories
          </Button>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Catégorie 1</MenuItem>
            <MenuItem onClick={handleClose}>Catégorie 2</MenuItem>
            <MenuItem onClick={handleClose}>Catégorie 3</MenuItem>
          </Menu>
          <Link to="/profile" className={classes.link}>
            <Button color="inherit">Profil</Button>
          </Link>
        </div>

        {/* Bouton de connexion */}
        <Button color="inherit">Connexion</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
