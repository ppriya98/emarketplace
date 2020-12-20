import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Header from "../Cloth/Header";
import Content from "../Cloth/Content";
import "./Cloth.css";
// import Cart from "./Cart";
// import Products from "./Constants";
// const PAGE_PRODUCTS = 'products';
// const PAGE_CART = 'cart';

const Cloth=()=>  {

  // const [cart, setCart] = useState([]);
  // const [page, setPage] = useState(PAGE_PRODUCTS);

  // const navigateTo = (nextPage) => {
  //   setPage(nextPage);
  // };

  // const getCartTotal = () => {
  //   return cart.reduce(
  //     (sum, { quantity }) => sum + quantity,
  //     0
  //   );
  // };

  return (

    

    
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
    // </div>
  );
}

export default Cloth;