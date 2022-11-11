import React, { useState } from 'react';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CleanServiceCard from "./CleanServiceCard";

const Services = () => {
    const [cleanService, setCleanService] = useState([]);
  useEffect(() => {
    fetch("https://cleaning-service-server.onrender.com/service")
      .then((res) => res.json())
      .then((data) => setCleanService(data));
  }, []);
    return (
        <div>
        <div>
        <h1 className="text-center text-primary  ">Services</h1>
        </div>
        <div>
  
  {
     cleanService.map(clService => <CleanServiceCard
     key={clService._id}
     clService={clService}
     ></CleanServiceCard>)
  }
  </div>
      </div>
      
    
    );
};

export default Services;