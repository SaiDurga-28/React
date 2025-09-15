import React from "react";
import './Component.css';
const Component=()=>{
    var Data=[
        {
            "name":"Thub",
            variant:"Green"
        },
         {
            "name":"Aditya",
            variant:"Green"
        },
         {
            "name":"Pragathi",
            variant:"Red"
        }
    ]
  return(
    <>
    {/* <h1>Component</h1> */}
    <div className="parent">
        {
      //       Data.map((ele)=>{
      //          return  (<div className="card">
      //   <div className="logo">
      //      <img src="{data.image}"/>
      //   </div>
      //   <div className="info">
      //     <div className="price">Price: {Data.price}</div>
      //     <div className="brand">Brand: {Data.brand}</div>
      //   </div>
      // </div>)
      // })
         Data.map((ele) => (
          <div className={ele.variant == "Green" ? "card bg-green" : "card bg-red"}>
            {ele.name}
          </div>
        ))
        }
    </div>
    </>
  )
}
export default Component;