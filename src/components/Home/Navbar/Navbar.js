import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { AuthContext } from './../../../context/AuthProvider/AuthProvider';

const Navbar = () => {
  const {user,logOut} =useContext(AuthContext);
  const handleLogOut =()=>{
    logOut()
    .then( () => {})
    .catch(error => console.error(error))
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light  ">
      <Link className="navbar-brand ms-5" to="/">
        CLEANING SERVICE
      </Link>
      <div className="container-fluid">
        <button
          className="navbar-toggler collapseOnSelect"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="responsive-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link ms-5">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-5 " to="/service">
                Services
              </Link>
            </li>
           


            {
              user?.email?
               <>
              <li className="nav-item">
              <Link className="nav-link ms-5 " to="/addService">
                Add-Service
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link ms-5" to="/myReviews">
            My-Reviews
            </Link> 
          </li>
          <li className="nav-item">
            <Button variant="light" onClick={handleLogOut}>Logout</Button> 
          </li>
          </>
          : 

          <>
          <Link to="/signin" className="nav-link ms-5 ">
                Signin
              </Link>
          <Link to="/signup" className="nav-link ms-5 ">
                SignUp
              </Link>
              
          </>
            }
            <li className="nav-item">
              <Link to="/blogs" className="nav-link ms-5 ">
                Blogs
              </Link>
            </li> 
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
