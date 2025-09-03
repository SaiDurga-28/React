import React from "react";
const GenderComponent=()=>{
    return(
           <form>
            <label>Gender: </label>
            <input type="radio" name="Gender"></input><label>Male</label>
           <input type="radio" name="Gender"></input><label>Female</label>
           <input type="radio" name="Gender"></input><label>Others</label>
           </form>
    )
}
export default GenderComponent;