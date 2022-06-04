import { AppBar } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import memoriesLogo from '../../images/memoriesLogo.png';
import memoriesText from '../../images/memoriesText.png';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img src={memoriesText} alt="icon" height="45px" />
        <img className={classes.image} src={memoriesLogo} alt="memories" height="40px"></img>
      </Link>
    </AppBar>
  );
};

export default Navbar;
