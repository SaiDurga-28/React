import React from "react";
import { Link } from "react-router-dom";
import img from './assets/react.svg';
function ProductCards(){
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
    return(
        <>
          <div className="parent">
           {
            Data.map(ele=>{
                return(
                    <div className="card" onClick={()=>window.location.href=`/product-info/${ele.ID}`}>
                        <div className="logo">
                            <img src={ele.Image}/>
                        </div>
                        <div className="info">
                            <div className="brand">Brand: {ele.Brand}</div>
                            <div className="price">Price: {ele.Price}</div>
                        </div>
                    </div>
                )
            })
           }
          </div>
        </>
    )
}
export default ProductCards;