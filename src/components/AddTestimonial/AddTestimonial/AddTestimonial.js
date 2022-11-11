import React from 'react';
import AddTestimonialForm from '../AddTestimonialForm/AddTestimonialForm';
import useTitle from './../../../hooks/userTitle';

const AddTestimonial = () => {
  useTitle('AddTestimonial');
    return (
      <div className="row">

        <div className="col-md-9">
            <AddTestimonialForm></AddTestimonialForm>
        </div>
      </div>
    );
};

export default AddTestimonial;