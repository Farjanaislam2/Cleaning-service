import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import Service from './components/Service/Service/Service';
import AddService from "./components/AddService/AddService";
import Testimonial from "./components/Testimonial/Testimonial/Testimonial";
import AddTestimonial from "./components/AddTestimonial/AddTestimonial/AddTestimonial";
import CleanServiceDetails from "./components/Home/Services/CleanServiceDetails";
import Blog from './components/Blog';
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";



export default function BasicExample() {
  ;

  return (
    
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/service">
              <Service></Service>
            </Route>
            
            <PrivateRoute path="/cleanServiceDetail/:id">
             <CleanServiceDetails></CleanServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/myReviews">
              <Testimonial></Testimonial>
            </Route>
            <Route path="/addReview">
              <AddTestimonial></AddTestimonial>
            </Route>
            <Route path="/blogs">
              <Blog></Blog>
            </Route>
          </Switch>
        </Router>
     
  );
}
