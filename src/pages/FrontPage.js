import '../front-page.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { React } from 'react';
import { useNavigate } from 'react-router-dom';


function FrontPage() {
  const navigate = useNavigate();

  const joinNow = () => {
    navigate("/signup");
  }




  return (
    <>
      <div className="header" >
        <img src="https://images.pexels.com/photos/4210611/pexels-photo-4210611.jpeg" alt="pill pic" />
        <div className="header-text" style={{ fontFamily: "Poppins" }}>
          <h2>Welcome to MedVice</h2>
          <p>Your medication, simplified</p>
          <Button variant="danger" onClick={joinNow}>Sign Up for Free</Button>
        </div>
      </div>
      <div className="front-page-container" style={{ margin: "0% 0%", fontFamily: "Poppins" }}>
        <div className="front-page-text-container" style={{ justifyContent: 'center', width: '75rem' }}>
          <br />
          <br />
          <h2 >Keep your meds in check with MedVice!</h2>
          <br />
          <h5>💊 MedVice holds all your medication data in one convenient place. ✅</h5>
          <br />
          <br />

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/5699519/pexels-photo-5699519.jpeg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Keep your medicine saved in a single page for easy tracking</h3>
                <p>Never lose track of meds and how many you got left ever again </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/7788341/pexels-photo-7788341.jpeg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>OpenFDA API</h3>
                <p>MedVice uses OpenFDA API to recommend you ways to store, dose and identify meds 👀 🔎</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/210661/pexels-photo-210661.jpeg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>So convenient!</h3>
                <p>
                  Stop reading leaflets and writing down indications with MedVice now! ⛔ 🖊️ 💊
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <br />
          <br />
          <br />
          <div>
            <h2>✍ What are you waiting for? Sign up now! 📝</h2>
            <br />
            <Button variant="warning" size="lg" onClick={joinNow} style={{ width: "15%", justifyContent: "center", color: "white" }}>Sign Up</Button>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
export default FrontPage; 
