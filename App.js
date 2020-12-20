import logo from './logo.svg';
import clsx from 'clsx';
import React from "react";
import './App.css';
import Homes from './component/Pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Homepage from "./component/Pages/Homepage";
import Cards from "./component/elements/Card";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Services from './component/Pages/Service';
import Products from './component/Pages/Product';
import SignUp from './component/Pages/SignUp';
// import ContactUs from './Components/Pages/ContactUs';
import ContactUs from "./component/Pages/ContactUs";
import Home from "./component/Pages/Home";
import Login from "./component/Login/Main";
import Navbar from "./component/Navbar/Navbar";
import Cloth from "../src/component/Cloth/Cloth";
// import Bottom from "../elements/Bottom";
import Jewel from "../src/component/Accessories/Jewel";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App(){
return (
  
     <section>
      <Router>
        <Navbar/>
        {/* <Carousels/> */}
        {/* <Homes/> */}
      <Switch>
      <Route path='/' exact component={Homes} />
        {/* <Route path='/services' component={Services} /> */}
        <Route path='/products' component={Cloth} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/services' component={Jewel} />
        <Route path='/sign-up' component={Login} />
      
      </Switch>
    </Router>
   
    </section>
    );
}

export default App;


