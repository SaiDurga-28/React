import React from "react";
import { useState } from "react";
import './Component.css'
function ImageEntity_Base64()
{
    const [imagepath,setimagepath]=useState(null)
    const GetData=(event)=>{
        const file=event.target.files[0]
        const reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>{
           setimagepath(reader.result)
        console.log(reader.result)
        }
    }
    return(
        <>
        <input type="file" onChange={(event)=> GetData(event)}/>
        {
            imagepath ? <img src={imagepath} className="Styles" alt="PathisWrong"/> : <></>
        }
        </>
    )
}
export default  ImageEntity_Base64;