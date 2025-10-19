import React from "react";
import image1 from './assets/react.svg';
import image2 from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function AddOn_Carousels() {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={image1} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>React Logo</h5>
              <p>This is the React logo slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image2} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Vite Logo</h5>
              <p>This is the Vite logo slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image1} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>React Again</h5>
              <p>Back to React for the final slide.</p>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default AddOn_Carousels;