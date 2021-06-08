import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function About() {
  return (
  <>
    <Container>
      <Row>
        <Col>
          <div>
            <h2>DOG WISHLIST</h2>
            <p></p>
          </div></Col>
        <Col className="bio-img">
          <img className="bio-pic" width="300" height="300" src="https://images.squarespace-cdn.com/content/v1/586bb37015d5db0182382d50/1542398119360-QCA3WW5C9QTXOKCSJMEC/ke17ZwdGBToddI8pDm48kKT96-mTqGc-stp-zZRIm9p7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UTNp7wJXdR1xX66M6thRzqrQ6_o4HcW8ZfkNO26r5aioETgZ1M0luSsj-o69URGWyw/Facetune_16-11-2018-13-52-27.JPG?format=750w"/>
        </Col>
      </Row>
    </Container>
  </>
  );
}
