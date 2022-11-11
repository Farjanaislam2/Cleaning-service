import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import Services from './../../Home/Services/Services';


const Service = () => {
  
    return (
      <div className=" container row">
        <h1>Details</h1>
        <div>
          <Navbar></Navbar>
          <Services></Services>
          <Footer></Footer>
        </div>
    
      </div>
    );
};

export default Service;