import React from 'react';
import Staff1 from "../../../images/Staff1.JPG"
import Staff2 from "../../../images/Staff2.JPG"
import Staff3 from "../../../images/Staff3.JPG"
import Staff4 from "../../../images/Staff4.JPG"
import Staff5 from "../../../images/Staff5.png";
import Staff6 from "../../../images/Staff6.jpg";
import css from '../ServiceStaff/ServiceStaff.css'


const ServiceStaff = () => {
    return (
      <div className="row">
        <div className="text-color">
          <u>
            <h2 className="text-center">CLEVER STAFF</h2>{" "}
          </u>
        </div>
        <div className=" mt-3 staff-img col-md-8">
          <img src={Staff1} alt="" />
          <img src={Staff2} alt="" />
          <img src={Staff3} alt="" />
          <img src={Staff4} alt="" />
          <img src={Staff5} alt="" />
          <img src={Staff6} alt="" />
        </div>
        <div className="col-md-4">
          <div class="p-3 ">
            <h3 className="text-color">Brandon Wash</h3>
            <h6>Officer Cleaner</h6>
            <p>
            Best Full Service Car Wash in the area because WE CARE! We use a hospital grade disinfectant cleaner...
                <br/><br/>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque lada tum, totam rem aperiam.Best Full Service Car Wash in the area because WE CARE! We use a hospital grade disinfectant cleaner...
                  <br/><br/>
                  Best Full Service Car Wash in the area because WE CARE! We use a hospital grade disinfectant cleaner...
            </p>
          </div>
        </div>
      </div>
    );
};

export default ServiceStaff;