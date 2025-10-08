import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import img from './assets/react.svg';
function ProductInfo(){
   const Data=[
           {
               'ID':1,
               'Name':"TShirt",
               "Brand":"Rare Rabbit",
               "Price":3000,
               "Description":"Best Sale Product",
               "Specification":"Silk",
               "Image":img
           },
            {
               'ID':2,
               'Name':"CropTop",
               "Brand":"Libas",
               "Price":5000,
               "Description":"Best Sale Product",
               "Specification":"Georgette",
               "Image":img
           },
            {
               'ID':3,
               'Name':"Lehenga",
               "Brand":"Nerus",
               "Price":15000,
               "Description":"Best Sale Product",
               "Specification":"Cotton",
               "Image":img
           },
            {
               'ID':4,
               'Name':"Jacket",
               "Brand":"US Polo",
               "Price":10000,
               "Description":"Best Sale Product",
               "Specification":"Jean",
               "Image":img
           },
       ]
    const ReceivedData=useParams();
    console.log(ReceivedData)
    const [mycard,setmycard]=useState(null)
    useEffect(()=>{
        Data.filter(ele=>{
            if(ele.ID==parseInt(ReceivedData.ID)){
                 setmycard(ele);
            }
        })
    },[])
    // return(
    //     <>
    //       <div className="DetailedInfo">
    //         <div>Name: {mycard.Name}</div>
    //         <div>Description: {mycard.Description}</div>
    //         <div>Specification: {mycard.Specification}</div>
    //         <div>Brand: {mycard.Brand}</div>
    //         <div>Price: {mycard.Price}</div>
    //       </div>
    //     </>
    // )
    return (
  <>
    {mycard ? (
      <div className="DetailedInfo">
        <div>Name: {mycard.Name}</div>
        <div>Description: {mycard.Description}</div>
        <div>Specification: {mycard.Specification}</div>
        <div>Brand: {mycard.Brand}</div>
        <div>Price: {mycard.Price}</div>
      </div>
    ) : (
      <div>Loading product info...</div>
    )}
  </>
);
}
export default ProductInfo;