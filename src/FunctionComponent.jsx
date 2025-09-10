import React from "react";
// import Myimage from "./assets/react.svg"
import "./FunctionComponent.css";
const FunctionComponent = (prop) => {
  console.log(prop);
  return(
    <>
    {/* <marquee direction="left"><h1 className="heading">Function-Component</h1></marquee>
    <p style={{color:"red"}}>Sai Durga</p>
    <a href="https://vite.dev/"><img src="/vite.svg" width="100px" height="100px"></img></a>
    <div className="box"></div>
     <div className="box" style={{color:"white", textAlign:"center", fontSize:"30px", paddingTop:"150px"}}>Sai Durga</div> */}
     {/* <div className="parent"> */}
      <div className="card">
        <div className="logo">
           <img src="{prop.data.image}"/>
        </div>
        <div className="info">
          <div className="price">Price: {prop.data.price}</div>
          <div className="brand">Brand: {prop.data.brand}</div>
        </div>
      </div>
     {/* </div> */}
    </>
  )
};

export default FunctionComponent;