import React from "react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import './Component.css';
function Dashboard(){
        const [state, setState] = useState({
          
            series: [{
              name: 'AEC',
              type: 'column',
              data: [500,300,400,600,1000,1200]
            }, {
              name: 'ACET',
              type: 'column',
              data: [600,300,400,600,900,1000]
            }, {
              name: 'ACOE',
              type: 'line',
              data: [400,500,600,700,400,900]
            }],
            options: {
              chart: {
                height: 350,
                type: 'line',
                stacked: false
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                width: [1, 1, 4]
              },
              title: {
                text: 'Aditya University Admissions Analysis - (2020 - 2025)',
                align: 'left',
                offsetX: 110
              },
              xaxis: {
                categories: [2020, 2021, 2022, 2023, 2024, 2025],
              },
              yaxis: [
                {
                  seriesName: 'AEC',
                  axisTicks: {
                    show: true,
                  },
                  axisBorder: {
                    show: true,
                    color: '#008FFB'
                  },
                  labels: {
                    style: {
                      colors: '#008FFB',
                    }
                  },
                  title: {
                    text: "AEC Count",
                    style: {
                      color: '#008FFB',
                    }
                  },
                  tooltip: {
                    enabled: true
                  }
                },
                {
                  seriesName: 'ACET',
                  opposite: true,
                  axisTicks: {
                    show: true,
                  },
                  axisBorder: {
                    show: true,
                    color: '#00E396'
                  },
                  labels: {
                    style: {
                      colors: '#00E396',
                    }
                  },
                  title: {
                    text: "ACET Count",
                    style: {
                      color: '#00E396',
                    }
                  },
                },
                {
                  seriesName: 'ACOE',
                  opposite: true,
                  axisTicks: {
                    show: true,
                  },
                  axisBorder: {
                    show: true,
                    color: '#FEB019'
                  },
                  labels: {
                    style: {
                      colors: '#FEB019',
                    },
                  },
                  title: {
                    text: "ACOE Count",
                    style: {
                      color: '#FEB019',
                    }
                  }
                },
              ],
              tooltip: {
                fixed: {
                  enabled: true,
                  position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                  offsetY: 30,
                  offsetX: 60
                },
              },
              legend: {
                horizontalAlign: 'left',
                offsetX: 40
              }
            },
          
          
        });
        const [state2, setState2] = useState({
          
            series: [{
                name: "Placements",
                data: [1000,2000,1500,1700,1900,500]
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
                text: 'Placements Trend by Year',
                align: 'left'
              },
              grid: {
                row: {
                  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                  opacity: 0.5
                },
              },
              xaxis: {
                categories: ['2020','2021','2022','2023','2024','Present'],
              }
            },
          
          
        });
        const [state3, setState3] = React.useState({
          
            series: [1500,1200,1000,500,500,1300,1000],
            options: {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['CSE','ECE','EEE','MECH','CIVIL','AIML','DS'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          
          
        });
        const [state4, setState4] = useState({
          
            series: [{
              name: 'THUB',
              data: [120,100,150,120,130,180,170]
            }, {
              name: 'NON THUB',
              data: [70,60,90,50,100,70,80]
            }],
            options: {
              chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                stackType: '100%'
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                  }
                }
              }],
              xaxis: {
                categories: ['2024-Q1','2024-Q2','2024-Q3','2024-Q4','2025-Q1','2025-Q2','2025-Q3'
                ],
              },
              fill: {
                opacity: 1
              },
              legend: {
                position: 'right',
                offsetX: 0,
                offsetY: 50
              },
            },
          
          
        });

        const [state5, setState5] = React.useState({
          
            series: [50,60,90,40],
            options: {
              chart: {
                height: 350,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    name: {
                      fontSize: '22px',
                    },
                    value: {
                      fontSize: '16px',
                    },
                    total: {
                      show: true,
                      label: 'Total',
                      formatter: function (w) {
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return 249
                      }
                    }
                  }
                }
              },
              labels: ['Programming Languages','Problem Solving Skills-DSA','WEB Technologies','AIML&Robotics'],
            },
          
          
        });

        
        return (
            <>
            <h2><b>Aditya University Dashboard</b></h2>
            <br></br>
          <div  className="box1">
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="line" height={600} width={720}/>
              </div>
            <div id="html-dist"></div>
            <div className="box2">
              <div>
             <div id="chart">
                <ReactApexChart options={state2.options} series={state2.series} type="line" height={300} width={350}/>
              </div>
            <div id="html-dist"></div>
            <div>
              <p><b className="text">Placements based on Skills</b></p>
            <div id="chart">
                <ReactApexChart options={state5.options} series={state5.series} type="donut" width={380} height={1000} />
              </div>
            <div id="html-dist"></div>
          </div>
            </div>
            </div>
          </div>
          <div className="box3">
             <div>
            <p><b className="text">DepartmentWise PlacementsCount - 2024-Present</b></p>
            <div id="chart">
                <ReactApexChart options={state3.options} series={state3.series} type="pie" width={400} />
              </div>
            <div id="html-dist"></div>
            </div>
             <div>
              <p><b className="text">Placements - Thub & Non-Thub - 2024-2025</b></p>
            <div id="chart">
                <ReactApexChart options={state4.options} series={state4.series} type="bar" height={350} width={730} />
              </div>
            <div id="html-dist"></div>
          </div>
          </div>
          </>
        );
}
export default Dashboard;