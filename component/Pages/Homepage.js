import React from "react";
import Carousels from "../elements/Carousel";
import Cardlong from "../elements/Cardlong";
// import Cards from "../elements/Card"
import Carouselscard from "../elements/Carouselscard";
import Footer from "../elements/Footer";
import Cards from "../carding/Cards";
import Navbar from "../Navbar/Navbar";
import Cloth from "../Cloth/Cloth";
import {Grid} from "@material-ui/core";
import {Menu,Search,Inbox,Mail,AccountCircle, LocalMall} from "@material-ui/icons";
import {Toolbar,ListItem,ListItemIcon,ListItemText,Drawer,List,Divider,fade,InputBase,SearchIcon,AppBar, Button,IconButton, Typography ,makeStyles} from '@material-ui/core';
import Feature from  "../Feature/Index";
import Design from "../elements/Design";
import Slicks from "../elements/Slicks";
// import Item from "../elements/Item";
import SideDrawer from "./Sidebar";
import Bottom from "../elements/Bottom";
import Grids from "./Grid";

const useStyles= makeStyles((theme)=>({
  grow: {
    flexGrow: '1' ,
  },
header:{
  backgroundColor:"pink",
  color:"black",
},

typography:{
  variant : "h2",
  
   
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
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
},
searchIcon: {
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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


const Homes=()=>{
  const classes=useStyles();
  return (
    <div className="Homes">
      {/* <AppBar position="sticky" className={classes.header}> */}
        {/* <Toolbar> */}
          {/* <IconButton arial-label="app" color="secondary" flexGrow="1"> */}
            {/* <Menu/> */}
            {/* <SideDrawer/> */}
           {/* </IconButton> */}
          {/* <Typography className={classes.typography}  >  */}
          {/* LOCALITES  */}
          {/* </Typography> */}

{/* 
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
        
         <Button color="inherit" >
         Buy or Sell
         </Button>
         
           <IconButton color="inherit" aria-label="account">
             <AccountCircle/></IconButton>
           
             <IconButton color="inherit" aria-label="account">
             <LocalMall/></IconButton>
        </Toolbar>
      </AppBar> */}
      {/* <Navbar/> */}
      <Carousels/>
      <Cards/>
      {/* <div className={classes.box}> */}
      {/* <Grids/> */}
      {/* <div>
        <div styles={{
          height: '500px'
        }}></div>
      </div> */}
      {/* <Cardlong/> */}

     <Feature/>
     <Design/>
     {/* <Slicks/> */}
      
      
      
       <Bottom/>
       <Footer/>
       
       

{/* <Design/> */}
{/* <Bottom/>
<Footer/>  */}
</div>

  );
};

export default Homes;


