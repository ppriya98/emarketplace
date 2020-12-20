import React from "react";
import {Card} from 'react-bootstrap';

import slide01 from "../../../src/image/3.jpg";


const Cardlong=()=>{
    return(
      <>
      <Card>
      <Card.Img  src= "../../../src/image/2.jpg" variant="top"  alt="Card image"/>
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
   
    </>
    );
}

export default Cardlong;