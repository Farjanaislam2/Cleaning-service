import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import img from '../../../images/card2.jpg'
import './Testimonal.css'
import Navbar from '../../Home/Navbar/Navbar';
import useTitle from './../../../hooks/userTitle';




const Testimonial = () => {
     const [reviews, setReviews] = useState([]);
     useTitle('review')
     useEffect(() => {
       fetch("http://localhost:5000/reviews")
         .then((res) => res.json())
         .then((data) => {
           setReviews(data);
         });
     }, []);
    return (
     
      <div>
        <Navbar></Navbar>
        <div className='mt-4'>
        <h1 className="text-center text-primary fw-bolder mb-4">Reviews</h1>
       
       <div className="container">
         <div className="row">
           {reviews.map((review) => (
             <TestimonialCard review={review}></TestimonialCard>
           ))}
         </div>
         
       </div>
        </div>
      </div>
    );
};

export default Testimonial;