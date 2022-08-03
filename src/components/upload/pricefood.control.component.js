import { Form, Col } from "react-bootstrap";
import { React } from "react";

function PriceFood({ setPricefood }) {
  return (
    <Form.Group as={Col} className="mb-2">
      <Form.Label>ราคา</Form.Label>
      <Form.Control
        type="number"
        placeholder="ราคาอาหาร"
        onChange={(e) => {
          setPricefood(e.target.value);
        }}
      />
    </Form.Group>
  );
}

export default PriceFood;
