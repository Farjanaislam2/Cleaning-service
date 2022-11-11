import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Navbar from './../Home/Navbar/Navbar';
import { Link, Redirect } from 'react-router-dom';
import { AuthContext } from './../../context/AuthProvider/AuthProvider';
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const SignIn = () => {
  const navigate = useHistory();
  const location =useLocation();

  const from = location.state?.from?.pathname || '/'
const [error,setError] =useState('');

  const {signin} = useContext(AuthContext);

    const handleSignin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signin(email,password)
        .then(result => {
          const user = result.user;
          console.log(user);
          form.reset();
          setError('');
          navigate('from, {replace:true}')
          
         
        })
        .catch(error => {
          console.error(error)
          setError(error.message)
        })
    }
    return (
       <div>
        <Navbar></Navbar>
         <Form onSubmit={handleSignin} className='mt-5 p-5 ms-5 me-5'>
            <h1 className='text-center text-primary fw-bolder'>Sign In</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Text className='text-danger'>
        {error}
       </Form.Text>
        </Form.Group>
       
        <div>
        <input className='btn-primary p-2 rounded-3' type="submit" name="" value="SignIn"/>
       </div>
      
        <p className='text-center mt-2'>New to Cleaning Service <Link to='/signup'>Sign In</Link></p>
      </Form>
       </div>
    );
};

export default SignIn;