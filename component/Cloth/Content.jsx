import React from "react";
import Cloth from "../Cloth/CoffeeCard";
import { Grid } from "@material-ui/core";
import clothMakerList from "../Cloth/Constants";

const Content = () => {
  const getClothMakerCard = clothMakerObj => {
    return (
      <Grid item xs={12} sm={4}>
        <Cloth{...clothMakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {clothMakerList.map(clothMakerObj => getClothMakerCard(clothMakerObj))}
    </Grid>
  );
};

export default Content;