import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";
import { toast } from "react-toastify";
import { UserContext } from "../context/user.context";
import "../login.css";
import { Button } from "react-bootstrap";

import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
  from 'mdb-react-ui-kit';




function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { authenticateUser } = useContext(UserContext);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    try {
      const response = await login({ email, password });
      console.log("response", response);
      localStorage.setItem("authToken", response.data);
      // "authToken" here with response.data

      //Setting the logged user in the context
      authenticateUser();
      toast.success("User logged in");
      navigate("/medication");
    } catch (e) {
      console.log(e)
      toast.error(`Invalid login`);
    }
  }

  return (


    <>


      <MDBContainer fluid>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>

            <MDBCard className='bg-dark text-white my-5 mx-auto'
              style={{ borderRadius: '1rem', maxWidth: '400px' }}
            >
              <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                <form onSubmit={handleSubmitForm}>

                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>

                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-70'
                    labelClass='text-white'
                    label='Email address'
                    id='email'
                    type='email'
                    size="lg"
                    value={email}
                    onChange={handleEmailChange}
                  />

                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-70'
                    labelClass='text-white'
                    label='Password'
                    id='password'
                    type='password'
                    size="lg"
                    value={password}
                    onChange={handlePasswordChange}
                  />

                  <Button type="submit" size="lg" variant="warning">Login</Button>
                </form>
                <br />
                <div>
                  <p className="mb-0">Don't have an account? <a href="/signup" class="text-white-50 fw-bold">Sign Up</a></p>
                </div>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
        </MDBRow>

      </MDBContainer>





    </>
  );
}

export default Login;
