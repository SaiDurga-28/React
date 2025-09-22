import React from "react";
import { useState } from "react";
function UseStateArrayExample(){
    const [data,setdata]=useState([1,2,3])
    //For Insertion
    const change=()=>{
        // setdata([4,5,6,7,8])
        setdata([...data,100])
    }
    return(
        <>
            {
                data.map(ele=>{
                    return <h1>{ele}</h1>
                })
            }
            <button onClick={change}>ClickToChange</button>
        </>
    )
}
export default UseStateArrayExample