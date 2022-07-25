import { React } from "react";
import PropTypes from "prop-types";
import { Card, Container } from "react-bootstrap";

function FoodCard({ cardStyleWidth, cardMargin, cardVariant, image, title, description }) {
  return (
    <Card style={{ width: cardStyleWidth , marginLeft:cardMargin , marginRight:cardMargin}} className="justify-content-center">
      <Card.Img src={image} variant={cardVariant} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

FoodCard.propTypes = {
  cardStyleWidth: PropTypes.string,
  cardVariant: PropTypes.string,
};

FoodCard.defaultProps = {
  cardStyleWidth: { width: "18rem" },
  cardVariant: "primary",
};

export default FoodCard;
