import React from 'react';

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

              <i className="fas fa-envelope-open-text"> Email</i>
            <div><a href="mailto:saramschoon@gmail.com" id="email" className="nav-link" target="_blank" rel="noreferrer"></a></div>
              <i className="fab fa-instagram"> Instagram</i>
           </div>

  </>
  );
}
