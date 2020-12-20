import React from "react";
import { Carousel } from 'react-bootstrap';
import {Card} from 'react-bootstrap';


import slide01 from "../../../src/image/1.jpg";
import slide02 from "../../../src/image/2.jpg";
import slide03 from "../../../src/image/3.jpg";



const Carouselscard = () => {
  return (
    <div className="App">
      <Carousel style = {{height: '20vh'}}>
<Carousel.Item style = {{height: '20vh'}}>
  <img
    className="d-block w-100"
    src = {slide01}
    alt="First slide"
  />
  <Carousel.Caption >
    <h3>hreading</h3>
    <p>para </p>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item style = {{height: '20vh'}}>
  <img
    className="d-block w-100"
    src = {slide02}
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item >


<Carousel.Item style = {{height: '100vh'}}>
  <img
    className="d-block w-100"
    src = {slide03}
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item >
</Carousel>
    </div>
  );
}

export default Carouselscard;