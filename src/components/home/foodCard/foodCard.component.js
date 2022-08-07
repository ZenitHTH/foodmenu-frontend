import { React , useState} from "react";
import PropTypes from "prop-types";
import { Card, Container } from "react-bootstrap";

function FoodCard({ cardStyleWidth, cardMargin, cardVariant, image, title, type, subtype }) {
  const [width] = useState(window.innerWidth);
  return (
    <Card style={{ width: cardStyleWidth , marginLeft:cardMargin , marginRight:cardMargin}} className="justify-content-center">
      <Card.Img src={image} variant={cardVariant} style={{height:width <= 767 ? `${width*0.6}px` : "240px"}}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>ประเภท: {type}</Card.Subtitle>
        <Card.Subtitle>ชนิด: {subtype.map((subtypeName)=>{return subtypeName+" ";})}</Card.Subtitle>
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
