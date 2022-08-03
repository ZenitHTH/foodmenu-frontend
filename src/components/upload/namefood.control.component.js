import { Form , Col} from "react-bootstrap";
import { React } from "react";

function NameFood({ setNamefood}) {
  return (
    <Form.Group as={Col} className="mb-2">
      <Form.Label> ชื่ออาหาร</Form.Label>
      <Form.Control
        type="text"
        placeholder="ชื่ออาหาร"
        onChange={(e) => {
          setNamefood(e.target.value);
        }}
      />
    </Form.Group>
  );
}

export default NameFood;
