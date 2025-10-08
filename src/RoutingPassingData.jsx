import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ProductCards from "./ProductCards";
import ProductInfo from "./ProductInfo";
function RoutingPassingData()
{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<ProductCards/>} />
            <Route path="/product-info/:ID" element={<ProductInfo/>} />
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default  RoutingPassingData