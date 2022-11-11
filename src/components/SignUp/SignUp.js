import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Navbar from "./../Home/Navbar/Navbar";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Button from "react-bootstrap/Button";
import { GoogleAuthProvider } from "firebase/auth";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const navigate = useHistory();
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const { providerLogin } = useContext(AuthContext);
const googleProvider =new GoogleAuthProvider()

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user);
      navigate('from, {replace:true}')
      
    })
    .catch(error => console.error(error))

  };
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <Form onSubmit={handleSignup} className="mt-5 p-5 ms-5 me-5">
          <h1 className="text-center text-primary fw-bolder">Sign Up</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              placeholder="Enter your name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <div>
            <input
              className="btn-primary p-2 rounded-3"
              type="submit"
              name=""
              value="Signup"
            />
          </div>
          <div>
            <Button
              onClick={handleGoogleSignIn}
              className="mt-3"
              variant="dark"
            >
              Sign up with Google
            </Button>
          </div>

          <p className="text-center mt-2">
            Already have an Account? <Link to="/signin">Sign in</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
