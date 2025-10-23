import React from "react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
function ApexChartDemo(){
        const [state, setState] = useState({
          
            series: [{
                name: "Desktops",
                data: [5000,10000,7000,9000]
            }],
            options: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              title: {
                text: 'Product Trends by Month',
                align: 'left'
              },
              grid: {
                row: {
                  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                  opacity: 0.5
                },
              },
              xaxis: {
                categories: ['Jan-March', 'April-June', 'July-Sep', 'Oct-Dec'],
              }
            },
          
          
        });

        

        return (
          <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="line" height={350} width={500}/>
              </div>
            <div id="html-dist"></div>
          </div>
        );
      }
export default ApexChartDemo;