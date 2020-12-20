import React from 'react';
import "./slider.scss";
import ImgComp from "./Img";
import {useState} from "react";
import i1 from "./image/1.jpg";
function Slider(){
    const [x,setX]=useState(0);
    let slideArr=[<ImgComp src={i1}/>,2,3];
    
    const goLeft = () => {
        
        x===0? setX(-100*(slideArr.length-1)):setX(x+100);
    };
    const goRight = () => {
        
        X===-100*(sliderArr.length-1)?setX(0):setX(x - 100);
    };

return(
    <div className="slider">
        {sliderArr.map((item,index)=>{
            return(
                <div key={index} className="slide" style={{transform:"translateX(${x}%)"}}>
                    {item}
                    </div>
                );
        })}
<button id="goLeft" onClick={goLeft}>left</button>
<button id="goRight" onClick={goRight}>right</button>

    </div>
);

}
export default Slider;

