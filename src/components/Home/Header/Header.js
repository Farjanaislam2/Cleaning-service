import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import Services from "../Services/Services";


const Header = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="container mt-3">
          <HeaderMain></HeaderMain>
          
        </div>
      </div>
    );
};

export default Header;