import React from "react";
import Tilty from "react-tilty";
import Image from './assets/react.svg';
import "./Component.css";
function AddOn_Tilty(){
     return(
        <>
       <Tilty>
        <img src={Image}/>
       </Tilty>
        </>
     )
}
export default AddOn_Tilty