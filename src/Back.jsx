import React from 'react';
import "./Back.css"
import myvideo from "./video/ab.mp4"
const Back = () =>{

    return (
       <div className ="parllel"> 
        <video autoPlay loop muted id="video">
        <source src={myvideo} type="video/mp4"/>
      </video>
      </div>
      
    )
}
export default Back;