import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import 'bootstrap/dist/css/bootstrap.min.css';


import slide01 from "../../../src/image/18.jpg";
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
});

const SlickCard = () =>{
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="240"
          image={slide01}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            ACCESSORIES
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            blehhhh
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Explore
        </Button>
      </CardActions>
    </Card>
  );
}

export default SlickCard;