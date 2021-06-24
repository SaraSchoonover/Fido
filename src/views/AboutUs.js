import React from 'react';
import {
  Button,
  Col, Container,
  Row
} from 'reactstrap';
import Footer from '../App/components/Footer';

export default function About() {
  return (
  <>
  <div className='bgImage2'>

    <Container className='desc'>
      <Row>
  <Col></Col>
  <Col>
  <h2>Our Story:</h2>
  <p>
  Our goal is to make shelters the first place potential adopters turn when looking to get a new pet, ensuring that all healthy and treatable pets find loving homes. We do this by breaking down misconceptions surrounding shelter pets and celebrating the unique bond between every shelter pet and parent.
  Please join us in committing to save as many lives as possible. Get involved. Adopt, foster and donate. Together we can change the world, one dog at a time...
  </p>
  <h2>
    Contact Us:
    </h2>
    <div className="aboutUs">
    <p>
    Thank you for your interest in Fido.
    Here are some ways you can get in touch with us.
    </p>
    </div>
    <div className="contactStyles">
             <div><i className="fab fa-twitter"> Twitter</i></div>
             <div> <i className="fas fa-envelope-open-text"> Email</i></div>
              <i className="fab fa-instagram-square"> Instagram</i>
             <div><i className="fab fa-facebook"></i> Facebook</div>
             </div>
           <div className="help">
      <h2>Ways To Help Out: </h2>
      <div className="bio-img">
        </div>
    <div className="donate">
      <Container className="img-container">
        <Row>
      <Col>
      <div>
    <img className="don-pic" width="050" height="50" src="https://firebasestorage.googleapis.com/v0/b/fido-e7f7f.appspot.com/o/donate-web.png?alt=media&token=25161c8a-2f89-4315-862b-6f3b9224513f"/>
    </div>
    <Button style={{ backgroundColor: '#94524A' }} className="don-btn"
       onClick={() => ('donate')}> Donate!</Button>
       </Col>
       <Col>
       <div>
       <img className="bio-pic" width="50" height="50" src="https://firebasestorage.googleapis.com/v0/b/fido-e7f7f.appspot.com/o/fostering-web.png?alt=media&token=eb69f459-c228-403f-9420-106005c35c58"/>
       </div>
       <Button style={{ backgroundColor: '#94524A' }} className="fos-btn"
       onClick={() => ('foster')}> Foster!</Button>
       </Col>
       <Col>
       <div>
       <img className="bio-pic" width="50" height="50" src="https://firebasestorage.googleapis.com/v0/b/fido-e7f7f.appspot.com/o/volunteer-web.png?alt=media&token=ef732ce3-eaee-4afe-bab6-6d84fc022379"/>
       </div>
       <Button style={{ backgroundColor: '#94524A' }} className="vol-btn"
       onClick={() => ('volunteer')}> Volunteer!</Button>
       </Col>
       </Row>
       </Container>
       </div>
   </div>
   </Col>
   </Row>
   </Container>
   </div>
   <Footer />
  </>
  );
}
