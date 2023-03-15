import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api";
import { toast } from "react-toastify";
import "../signup.css";
import { Button } from "react-bootstrap";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
}
  from "mdb-react-ui-kit";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    try {
      const response = await signup({ email, password });
      if (response.data.message) {
        toast.info(response.data.message);
        setPassword("");
        setEmail("");
      } else {
        toast.success("Thanks for creating an account with us ❤");
        navigate("/medication");
      }
    } catch (e) {
      toast.error(`error ${e}`);
      console.log(e);
    }
  }

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md="10" lg="6" className="order-2 order-lg-1 d-flex flex-column align-items-center">

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign Up</p>

              <br />

              <form onSubmit={handleSubmitForm}>
                <MDBInput
                  label="Email"
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange} />

                <MDBInput
                  label="Password"
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange} />
                <br />
                <Button style={{ color: "white" }} className="mb-3" variant="warning" size="lg">Register</Button>
              </form>

            </MDBCol>

            <MDBCol md="10" lg="6" className="order-1 order-lg-2 d-flex align-items-center">
              <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" fluid />
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>


  );
}

export default Signup;
