import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    position: 'relative',
    '&::before': {
      content: "''",
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      width: '1px',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    '&:last-child::before': {
      display: 'none',
    },
  },
}));

export const Navbar = () => {
  const classes = useStyles();

  const redirectToHome = () => {
    window.location.href = '/home';
  };

  const redirectToProducts = () => {
    window.location.href = '/products'; 
  };

  const redirectToAbout = () => {
    window.location.href = '/about-us';
  };

  const redirectToContact = () => {
    window.location.href = '/contact';
  };

  const redirectToCart = () => {
    window.location.href = '/cart';
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Jewellery Store
          </Typography>
          <Button color="inherit" onClick={redirectToHome} className={classes.button}>Home</Button>
          <Button color="inherit" onClick={redirectToProducts} className={classes.button}>Products</Button>
          <Button color="inherit" onClick={redirectToAbout} className={classes.button}>About Us</Button>
          <Button color="inherit" onClick={redirectToContact} className={classes.button}>Contact</Button>
          <Button color="inherit" onClick={redirectToCart} className={classes.button}>Cart</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
