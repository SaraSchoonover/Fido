import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardSubtitle
} from 'reactstrap';
import PropTypes from 'prop-types';

const WishListCard = ({
  age,
  breedId,
  description,
  imageUrl,
  name,
  status,
}) => (
      <Card>
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{age}</CardSubtitle>
        </CardBody>
        <img width="100%" src={imageUrl} alt="Card image cap" />
        <CardBody>
          <CardText>{description}</CardText>
          <CardText>{status}</CardText>
          <CardText>{breedId}</CardText>
          </CardBody>
      </Card>

);

WishListCard.propTypes = {
  age: PropTypes.string,
  breedId: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  // admin: PropTypes.any
};

export default WishListCard;
