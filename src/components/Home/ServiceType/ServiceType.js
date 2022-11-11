import React from 'react';
import cleaner from '../../../images/cleaner.jpg'
import css from '../ServiceType/ServiceType.css'
const ServiceType = () => {
    return (
      <div className="row">
        <div className="text-color">
          <u>
            <i>
              <h1 className="text-center">WHY CHOOSE US</h1>{" "}
            </i>
          </u>
        </div>
        <div className="col-md-8">
          <div class="container overflow-hidden">
            <div class="row gy-5">
              <div class="col-6">
                <div class="p-3 ">
                  <h4 className="text-color">Upholstery Cleaning</h4>
                  <p>
                  Best Full Service Car Wash in the area because WE CARE! We use a hospital grade disinfectant cleaner...
                  </p>
                </div>
              </div>
              <div class="col-6">
                <div class="p-3 ">
                  <h4 className="text-color">Carpet Cleaning</h4>
                  <p>
                  Best Full Service Car Wash in the area because WE CARE! We use a hospital grade disinfectant cleaner...
                  </p>
                </div>
              </div>
              <div class="col-6">
                <div class="p-3 ">
                  <h4 className="text-color">House Cleaning</h4>
                  <p>
                  Best Full Service Car Wash in the area because WE CARE! We use a hospital grade disinfectant cleaner...
                  </p>
                </div>
              </div>
              <div class="col-6">
                <div class="p-3 ">
                  <h4 className="text-color">Apartment Cleaning</h4>
                  <p>
                  Best Full Service Car Wash in the area because WE CARE! We use a hospital grade disinfectant cleaner...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" cleaner col-md-4">
          <img src={cleaner} alt="" />
        </div>
      </div>
    );
};

export default ServiceType;