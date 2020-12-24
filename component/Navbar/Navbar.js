import React, { useState } from 'react';
import { Button } from '../Navbar/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from '../Navbar/Dropdown';
import {Menu,Search,Inbox,Mail,AccountCircle, LocalMall} from "@material-ui/icons";
import {Toolbar,ListItem,ListItemIcon,ListItemText,Drawer,List,Divider,fade,InputBase,SearchIcon,AppBar, IconButton, Typography ,makeStyles} from '@material-ui/core';

const useStyles= makeStyles((theme)=>({
  grow: {
    flexGrow: '1' ,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
      flexGrow: '1' ,
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '150%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: '0' ,
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  
  gridContainer:{
    paddingLeft:"100px",
    paddingRight: "100px"
  },
  
}));
function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const classes=useStyles();
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
         LOCALITEEE 
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
       

       
       
       
        {/* <ul className={click ? 'nav-menu active' : 'nav-menu'}> */}
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>

            
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Toolbar>
             <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            </div>
        
         
         
           <IconButton color="inherit" aria-label="account">
             <AccountCircle/></IconButton>
           
             <IconButton color="inherit" aria-label="account">
             <LocalMall/></IconButton>
        </Toolbar>
            {/* <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link> */}
            {dropdown && <Dropdown />}
          </li>
          {/* <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li> */}
          {/* <li>
            <Link
              to='/services'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li> */}
          {/* <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li> */}
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        {/* </ul> */}
        <Button />
      </nav>
    </>
  );
}

export default Navbar;