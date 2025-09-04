import React from "react";
const FormComponent=()=>{
    const Respond=(data)=>{
        console.log(data);
    }
        return(
            <>
           <form>
            <label>Name: </label>
            <input type="text" placeholder="Enter Your Name"></input><br/><br/>
             <label>PhoneNumber: </label>
            <input type="text" placeholder="Enter Your Number"></input><br/><br/>
             <label>Email: </label>
            <input type="email" placeholder="Enter Your Email"></input><br/><br/>
             <label>Gender: </label>
            <input type="radio" name="Gender"></input><label>Male</label>
           <input type="radio" name="Gender"></input><label>Female</label>
           <input type="radio" name="Gender"></input><label>Others</label><br/><br/>
            <label>Skills: </label>
            <input type="checkbox" name="Skills"></input><label>C</label>
           <input type="checkbox" name="Skills"></input><label>C++</label>
           <input type="checkbox" name="Skills"></input><label>Java</label>
           <input type="checkbox"name="Skills"></input><label>Python</label>
           <input type="checkbox" name="Skills"></input><label>SQL</label><br/><br/>
            {/* <input type="button" value="Submit"></input> */}
            <button type="submit" onClick={(data)=>{Respond(data)}}>Submit</button>
           </form>
           </>
    )
}
export default FormComponent;