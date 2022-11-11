import React from "react";
import Header from "../Header/Header";
import ServiceStaff from "../ServiceStaff/ServiceStaff";
import ServiceType from "../ServiceType/ServiceType";
import Footer from "../../Shared/Footer/Footer";
import Testimonial from "../../Testimonial/Testimonial/Testimonial";
import CleaningService from "../Services/CleaningService";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useTitle from "./../../../hooks/userTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div className=" mt-3">
      <Header></Header>
      <div className="container mt-5">
        <CleaningService></CleaningService>
        <div className="mb-5 mx-5 px-5">
        <Link to="/service">
          <Button
            className="btn w-75 fw-bold font-weight-bolder  btn-primary p-3"
            variant="primary"
          >
            See All Services
          </Button>
        </Link>
        </div>
        <ServiceType></ServiceType>
        <ServiceStaff></ServiceStaff>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
