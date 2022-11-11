import React from 'react';
import AddServiceForm from '../AddServiceForm/AddServiceForm';
import Navbar from '../Home/Navbar/Navbar';
import useTitle from './../../hooks/userTitle';

const AddService = () => {
    useTitle('Addservice');
    return (
        <div className=" row">
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className="mt-5 bg-info p-3">
                <AddServiceForm></AddServiceForm>
            </div>
        </div>
    );
};

export default AddService;