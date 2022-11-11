import React from 'react';
import glass from '../../../images/glass.jpg'
import floor from '../../../images/floor.jpg'
import room from '../../../images/room.jpg'
import './HeaderMain.css'
import { Carousel } from 'react-bootstrap';

const HeaderMain = () => {
    return (
      <div
        id="carouselExampleIndicators"
        class="row carousel slide"
        data-bs-ride="carousel"
      >
        <div className="col-md-4 my-3">
          <h3>
            YOU HAVE A THOUSAND REASON TO CHOOSE US FOR THOSE MESSED UP THINGS.
          </h3>
          <p>
          Our high-quality and professional group is based on a team of experts insect pest control service meets your high-quality standards and norms. Quality assurance program team alwase check every step and ensure guarantees in service all over the Bangladesh.
          </p>
          <button className="btn btn-success">GET AN SERVICES</button>
        </div>
        <div className="img-size col-md-8">
          <Carousel>
            <Carousel.Item>
              <img src={room} class="d-block w-100" alt="..."></img>
              <Carousel.Caption>
                <h3>House Cleaning Service</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={floor} class="d-block w-100" alt="..."></img>

              <Carousel.Caption>
                <h3>Floor Cleaning Service</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={glass} class="d-block w-100" alt="..."></img>

              <Carousel.Caption>
                <h3>Glass Cleaning Service</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
};

export default HeaderMain;