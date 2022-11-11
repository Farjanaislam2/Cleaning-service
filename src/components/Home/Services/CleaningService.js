import React, { useState } from "react";
import { useEffect } from "react";
import CleanServiceCard from "./CleanServiceCard";


const CleaningService = () => {
  const [cleanService, setCleanService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/clnServices")
      .then((res) => res.json())
      .then((data) => setCleanService(data));
  }, []);
  return (
    <div>
      <div>
      <h1 className="text-center text-primary">Services</h1>
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

export default CleaningService;
