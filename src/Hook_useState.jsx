import React from "react";
import { useState } from "react";
function Hook_useState(){
    // const x=10;
    const [data,setdata]=useState(true)//10
    const change=()=>{
        setdata(!data)
         useState(0)
    setdata(data+1);
    }
    // console.log(data)
    // setdata(200)
    return <h1>Count: {data}</h1>
}
export default Hook_useState;