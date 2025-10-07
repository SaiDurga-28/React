import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import Page_NotFound from "./Page_NotFound";
function Routing_Mechanism()
{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<Page_NotFound/>} />
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Routing_Mechanism