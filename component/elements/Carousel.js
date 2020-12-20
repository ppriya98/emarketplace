import React from "react";
import { Carousel } from 'react-bootstrap';
import {Card} from 'react-bootstrap';


import slide01 from "../../../src/image/1.jpg";
import slide02 from "../../../src/image/2.jpg";
import slide03 from "../../../src/image/3.jpg";
import slide04 from "../../../src/image/25.jpeg";
import slide05 from "../../../src/image/9.jpeg";
import slide06 from "../../../src/image/10.jpeg";
import slide07 from "../../../src/image/24.jpg";



const Carousels = () => {
  return (
    <div className="App">
      <Carousel style = {{height: '80vh'}}>
<Carousel.Item style = {{height: '80vh'}}>
  <img
    className="d-block w-100"
    src = {slide04}
    alt="First slide"
  />

</Carousel.Item>

<Carousel.Item style = {{height: '80vh'}}>
  <img
    className="d-block w-100"
    src = {slide05}
    alt="Third slide"
  />

</Carousel.Item >


<Carousel.Item style = {{height: '80vh'}}>
  <img
    className="d-block w-100"
    src = {slide06}
    alt="Third slide"
    
  />

  
</Carousel.Item >

{/* <Carousel.Item style = {{height: '80vh'}}>
  <img
    className="d-block w-100"
    src = {slide07}
    // width = "100%"
    alt="Third slide"
  /> */}

  
{/* </Carousel.Item > */}
</Carousel>
    </div>
  );
}

export default Carousels;