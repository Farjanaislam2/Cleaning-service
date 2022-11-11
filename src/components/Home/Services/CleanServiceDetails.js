import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddTestimonialForm from "../../AddTestimonial/AddTestimonialForm/AddTestimonialForm";
import Navbar from "../Navbar/Navbar";
import CleanServiceDetailCard from "./CleanServiceDetailCard";
import useTitle from './../../../hooks/userTitle';

const CleanServiceDetails = () => {
  const [serviceDetails, setServiceDetail] = useState([]);
  const params = useParams();
  useTitle('clnService')

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch(`http://localhost:5000/clnService/${params.id}`);
      const newData = await res.json();

      setServiceDetail([newData]);
    };

    fetchdata();
  }, [params.id]);
  return (
    <div>
        <Navbar></Navbar>
      <h1 className="text-center text-primary mb-5 fw-bolder">Service</h1>
      <div >
       <div>
       {serviceDetails.map((serviceDetail) => (
          <CleanServiceDetailCard
            key={serviceDetail.id}
            serviceDetail={serviceDetail}
          ></CleanServiceDetailCard>
        ))}
       </div>
      </div>
      <div>
        <div className="mt-5 bg-info p-5">
        <AddTestimonialForm></AddTestimonialForm>
        </div>
     
      </div>
    </div>
  );
};

export default CleanServiceDetails;
