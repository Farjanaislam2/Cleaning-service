import React, { useState } from "react";

const AddServiceForm = () => {
  
  const [services, setServices] = useState({});
  // const [image, setImage] = useState(null);
  console.log(services);

  const handleBlur = (e) => {
    const newService = { ...services };
    newService[e.target.name] = e.target.value;
    setServices(newService);
  };



   const handleSubmit = (e) => {
     e.preventDefault();
     const formData = new FormData();
     formData.append("picture", services.url);
     formData.append("title", services.name);
     formData.append("about", services.Description);
     formData.append("balance", services.price);

     fetch("http://localhost:5000/addServices", {
       method: "POST",
       body: formData,
     })
       .then((res) => res.json())
       .then((data) => {
         if (data) {
           console.log(data);
           alert("Service added successfully");
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
        <h1 className="text-center">Add Service </h1>

        <form onSubmit={handleSubmit}>
          <input
            onBlur={handleBlur}
            className="form-control "
            name="name"
            placeholder="Product Name"
          />
          <br />
          
          <input
            onBlur={handleBlur}
            className="form-control "
            name="Description"
            placeholder="Description"
          />
          <br />
          <input
            onBlur={handleBlur}
            className="form-control"
            name="price"
            placeholder="Price"
          />{" "}
          <br />
          <input
            onChange={handleBlur}
            name="url"
            className="form-control"
            type="text"
          />
          <br />
          <input type="submit" value="Add Product" />
        </form>
      </div>
    </div>
  );
};

export default AddServiceForm;
