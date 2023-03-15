import { UserContext } from "../context/user.context";
import { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavigationBar() {
  const { loggedUser, logout } = useContext(UserContext);
  // console.log(loggedUser)
  return (
    <>
      <Navbar bg="light" justify variant="light">
        <Container fluid style={{ fontFamily: 'Poppins' }} >
          <Navbar.Brand href="/"><img src="/medvicelogo.png" alt="medvice-logo" style={{ width: "40px" }} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            {loggedUser ? (
              <>
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/medication">My Area</Nav.Link>
                  <Nav.Link href="/medication/add">Add new</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                  <Navbar.Text style={{ marginRight: "10px" }}>Welcome  💊{loggedUser.email}💊</Navbar.Text>
                  <Button onClick={logout} variant="danger">Logout</Button>
                </Nav>
              </>
            ) : (
              <>
                <Nav.Link href="/"><Navbar.Text>MedVice</Navbar.Text></Nav.Link>
                <Nav className="ms-auto" style={{ fontWeight: "bold" }}>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/signup" >Register</Nav.Link>
                </Nav>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
