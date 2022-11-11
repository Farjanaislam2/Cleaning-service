import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const TestimonialCard = ({ review }) => {
  console.log(review);

  return (
    <div className="col-md-4 gy-3">
      <div className="review-card p-4 text-center">
        <img
          className="img-fluid"
          src={`data:image/png;base64,${review.image.img}`}
          alt=""
        />
        <h4>{review.name}</h4>
        <p>{review.review}</p>
        <div>
          <ButtonGroup className="me-2" aria-label="Second group">
            <Button className="mx-5">Edit</Button> <Button>Delete</Button>
          </ButtonGroup>
        </div>
        
      </div>
    </div>
  );
};

export default TestimonialCard;
