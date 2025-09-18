import React from "react";
import { useState } from "react";
function Hook_useState(){
       const [x,setx]=useState(0)
        const change=()=>{
        if(x==true)
        {
            setx(false)
        }
        else{
            setx(true)
        }
    }
    return(
        <>
        {x==true ? <h1>Hello</h1> : <h1>Bye</h1>}
        <button onClick={change}>Change State</button>
        </>
    )
}
export default Hook_useState;