import React, { useState } from 'react';

const AddTestimonialForm = () => {
     const [reviews, setReviews] = useState({});
     const [image, setImage] = useState(null);
    //  console.log(services, image);

     const handleBlur = (e) => {
       const newReview = { ...reviews };
       newReview[e.target.name] = e.target.value;
       setReviews(newReview);
     };

     const handleImage = (e) => {
       const newImage = e.target.files[0];
       setImage(newImage);
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       const formData = new FormData();
       formData.append("image", image);
       formData.append("name", reviews.name);
       formData.append("review", reviews.review);

       fetch("http://localhost:5000/addReview", {
         method: "POST",
         body: formData,
       })
         .then((res) => res.json())
         .then((data) => {
           if (data) {
             console.log(data);
             alert("Review added successfully");
             e.target.reset();
           }
         })
         .catch((err) => {
           console.log(err);
         });
     };
    return (
      <div>
        <div className="col-md-6 mx-auto">
          <h1 className="text-center">Add Review </h1>

          <form onSubmit={handleSubmit}>
            <input
              onBlur={handleBlur}
              className="form-control "
              name="name"
              placeholder="Name"
            />
            <br />
            <input
              onBlur={handleBlur}
              className="form-control"
              name="review"
              placeholder="review"
            />{" "}
            <br />
            <input
              onChange={handleImage}
              name="exampleRequired"
              className="form-control"
              type="file"
            />
            <br />
            <input type="submit" value="Add Review" />
          </form>
        </div>
      </div>
    );
};

export default AddTestimonialForm;