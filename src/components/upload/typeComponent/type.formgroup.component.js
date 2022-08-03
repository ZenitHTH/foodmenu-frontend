import { Form, Col, Row, Button } from "react-bootstrap";
import { React, useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import Type from "./type.selectDropdown.component";
import axios from "axios";

function TypeComponent({ setSelectIdType, type, hostname }) {
  const [isTypeAdd, setIsTypeAdd] = useState(false);
  const [typeAdd, setTypeAdd] = useState("");
  const [width] = useState(window.innerWidth);

  const addType = () => {
    axios.post(`http://${hostname}:4000/type`, {name:typeAdd}).then((res) => {
      console.log(res);
    });
  };
  return (
    <Form.Group as={Row} className="mb-2">
      <Form.Label>ประเภท</Form.Label>
      <Col md={1} xs={1} lg={1}>
        {!isTypeAdd ? (
          <FaPlusCircle
            style={{ height: "100%", fontSize: "1.25rem" }}
            onClick={() => {
              setIsTypeAdd(!isTypeAdd);
            }}
          />
        ) : (
          <FaMinusCircle
            className=""
            style={{ height: "100%", fontSize: "1.25rem" }}
            onClick={() => {
              setIsTypeAdd(!isTypeAdd);
            }}
          />
        )}
      </Col>
      <Col
        md={isTypeAdd ? 3 : 11}
        xs={isTypeAdd ? 5 : 11}
        lg={isTypeAdd ? 4 : 11}
      >
        <Type type={type} setOutput={setSelectIdType} />
      </Col>

      {isTypeAdd ? (
        <Col md={2} xs={6} lg={5}>
          <Form.Control
            type="text"
            placeholder="ชื่อประเภท"
            onChange={(e) => {
              setTypeAdd(e.target.value);
            }}
          />
        </Col>
      ) : (
        <></>
      )}

      {isTypeAdd ? (
        <Col md={2} xs={"auto"} lg={2}>
          <Button
            className={width <= 576 ? "mt-2" : ""}
            style={{ fontSize: "0.75rem" }}
            onClick={addType}
          >
            เพิ่มประเภท
          </Button>
        </Col>
      ) : (
        <></>
      )}
    </Form.Group>
  );
}

export default TypeComponent;
