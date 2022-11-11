import React, { useEffect, useState } from 'react';
import ServiceListTable from '../ServiceListTable/ServiceListTable';

const ServiceList = () => {
     const [services, setServices] = useState([]);

     useEffect(() => {
       fetch("http://localhost:5000/services")
         .then((res) => res.json())
         .then((data) => {
           setServices(data);
         });
     }, []);
    return (
      <div className="row">
        <div className="col-md-9">
          <ServiceListTable services={services}></ServiceListTable>
        </div>
      </div>
    );
};

export default ServiceList;