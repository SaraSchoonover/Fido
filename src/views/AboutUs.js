import React from 'react';
import { Button } from 'reactstrap';

export default function About() {
  return (
  <>
  <p>
  Our goal is to make shelters the first place potential adopters turn when looking to get a new pet, ensuring that all healthy and treatable pets find loving homes. We do this by breaking down misconceptions surrounding shelter pets and celebrating the unique bond between every shelter pet and parent.
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
              <i className="fas fa-envelope-open-text"> Email</i>
            <div><a href="mailto:saramschoon@gmail.com" id="email" className="nav-link" target="_blank" rel="noreferrer"></a></div>
              <i className="fab fa-instagram"> Instagram</i>
           </div>

           <div className="help">
      <h2>Ways to help out! </h2>
    <div className="donate">
    <Button className="don"
       onClick={() => ('addToWishList')}> Donate</Button>
       </div>
       <div className="foster">
       <Button className="fos"
       onClick={() => ('addToWishList')}> Foster</Button>
       </div>
       <div className="volunteer">
       <Button className="vol"
       onClick={() => ('addToWishList')}> Volunteer</Button>
   </div>
   </div>
  </>
  );
}
