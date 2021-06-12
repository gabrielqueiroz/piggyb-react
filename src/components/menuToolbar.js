import React from 'react'
import logo from '../static/images/piggy_bank_white.png';
import profile from '../static/images/profile.jpeg';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
  },
  logo: {
    maxWidth: 25,
    marginRight: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MenuToolbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <img src={logo} className={classes.logo} alt="logo" />
        <Typography variant="h6" className={classes.title}>
          PiggyBank
        </Typography>
        <Avatar alt="Gabriel Queiroz" src={profile} />
      </Toolbar>
    </AppBar>
  )
};

export default MenuToolbar
