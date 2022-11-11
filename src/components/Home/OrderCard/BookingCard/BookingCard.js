import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import OrderFrom from '../OrderFrom/OrderFrom';

const BookingCard = ({booking}) => {
console.log(booking);
let history = useHistory();
 const handleClick = (id)=>{
   console.log(id)
   history.push("/order/"+id);

 }
    return (
      <div className="col-md-4 mb-5 mt-3">
        <div className="card h-100 p-3">
          <div className="card-body text-center">
            <img
              style={{ height: "200px" }}
              className="img-fluid "
              src={`data:image/png;base64,${booking.image.img}`}
              alt=""
            />
            <h5 className="cart-title text-brand">{booking.name}</h5>
            <p>$ {booking.price}</p>
            <button
              onClick={() => handleClick(booking._id)}
              className="btn btn-brand text-uppercase"
            >
              ORDER NOW
            </button>
            {/* <OrderFrom modalIsOpen = {modalIsOpen} orderOn={booking.subject} closeModal = {closeModal}></OrderFrom>
             */}
          </div>
        </div>
      </div>
    );
};

export default BookingCard;