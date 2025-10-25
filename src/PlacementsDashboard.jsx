import React from "react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import './PlacementsDashboard.css';
function PlacementsDashboard(){
    return(
        <>
        <div>
            <h1 className="heading">ADITYA UNIVERSITY - 2025</h1>
        </div>
        <div className="cards">
            <div className="card">
                <p className="textstyle">👩‍🎓</p>
                <p className="textstyle1">1300</p>
                <p className="textstyle1"><b>Students Eligible</b></p>
            </div>
             <div className="card">
                <p className="textstyle">🎯</p>
                <p className="textstyle1">600</p>
                <p className="textstyle1"><b>Students Placed</b></p>
            </div>
             <div className="card">
                <p className="textstyle">📈</p>
                <p className="textstyle1">78%</p>
                <p className="textstyle1"><b>Placement Percentage</b></p>
            </div>
             <div className="card">
                <p className="textstyle">🏆</p>
                <p className="textstyle1">33LPA</p>
                <p className="textstyle1"><b>Highest Package</b></p>
            </div>
             <div className="card">
                <p className="textstyle">💼

                </p>
                <p className="textstyle1">6LPA</p>
                <p className="textstyle1"><b>Average Package</b></p>
            </div>
        </div>
        <div>
            
        </div>
        </>
    )
}
export default PlacementsDashboard;