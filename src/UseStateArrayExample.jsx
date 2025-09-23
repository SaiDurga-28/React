import React from "react";
import './Component.css'
import { useState } from "react";
function UseStateArrayExample(){
    const [data,setdata]=useState([1,2,3])
    // //For Insertion
    // const change=()=>{
    //     // setdata([4,5,6,7,8])
    //     setdata([...data,100])
    // }
    // return(
    //     <>
    //         {
    //             data.map(ele=>{
    //                 return <h1>{ele}</h1>
    //             })
    //         }
    //         <button onClick={change}>ClickToChange</button>
    //     </>
    // )
    const Delete=(deleteindex)=>{
         const arr=(data.filter((ele,index)=>index!=deleteindex));
         setdata(arr);
    }
    return(
        <>
           {/* <div className="parent">{
                data.map((ele,index=>{
                    return (
                    <div key={index} className="child">{ele}<button onClick={()=>Delete(index)}>Delete</button>-{index}</div>
                    )
                }))
            }
            </div> */}
            <div className="parent">
                {data.map((ele, index) => (
                    <div  className="child">
                        {ele}
                        <button onClick={() => Delete(index)}>Delete</button> - {index}
                    </div>
                ))}
            </div>
        </>
    )
}
export default UseStateArrayExample