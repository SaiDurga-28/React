import React from "react";
import { ToastContainer,toast } from "react-toastify";
function AddOn_Toast(){
    const callToast=()=>{
        toast("Registered Successfully");
    }
     return(
        <>
       <button onClick={callToast}>Give Toast Message</button>
       <ToastContainer/>
        </>
     )
}
export default AddOn_Toast