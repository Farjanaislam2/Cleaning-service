import React from 'react';
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const OrderFrom = ({modalIsOpen, closeModal, orderOn})=>{
const { register, handleSubmit, formState: { errors } } = useForm();
  
const onSubmit = data => {
data.service = orderOn;
    const fromData ={
      name: data.name, 
      email: data.email
    }
    

   fetch("https://cleaning-service-server.onrender.comaddOrder", {
     method: "POST",
     headers: { "content-type": "application/json" },
     body: JSON.stringify(fromData),
   })
     .then(res => res.json())
     .then(success => {
       if (success) {
         closeModal();
         alert(" Order Created Successfully");
       }
     });

 
  }
  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className=" text-center text-brand">{orderOn}</h2>
        <form className="p-4 m-3 mt-3"  onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-3">
            <input
              type="name "
              placeholder="Your Name"
              {...register("name", { required: true })}
              className="form-control "
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group mb-3 ">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="form-control"
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className="form-control"
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group mb-3 row">
            <div className="col-4">
              <input type="submit" className="btn btn-brand" />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default OrderFrom;