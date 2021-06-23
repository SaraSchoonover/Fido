import React from 'react';
import { Col, Container, Row } from 'reactstrap';
// import { Button } from 'reactstrap';

export default function Header() {
  return (
  <div className="bg-image">
          <div className="header-text">
          <Container>
      <Row>
        <Col>
          <div>
            <p></p>
          </div></Col>
        <Col >
        <h1>
        Fido is a community of dog lovers
        </h1>
        <h5>
        working to promote shelter dogs as the best dogs in the world through advocacy of our unique family-friendly foster and adoption programs.
        </h5>
        </Col>
      </Row>
    </Container>
          </div>
  </div>
  );
}
