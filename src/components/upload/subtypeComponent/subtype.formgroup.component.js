import { Form, Col, Row, Button } from "react-bootstrap";
import { React, useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import SubType from "./subtype.multiselectDropdown.component";

function SubTypeComponent({ setSelectIdSubType, subtype }) {
  const [isTypeAdd, setIsTypeAdd] = useState(false);
  const [width] = useState(window.innerWidth);
  return (
    <Form.Group as={Row} className="mb-2">
      <Form.Label>ชนิด</Form.Label>
      <Col md={1} xs={1} lg={1}>
        {isTypeAdd ? (
          <FaMinusCircle
            className=""
            style={{ height: "100%", fontSize: "1.25rem" }}
            onClick={() => {
              setIsTypeAdd(!isTypeAdd);
            }}
          />
        ) : (
          <FaPlusCircle
            className=""
            style={{ height: "100%", fontSize: "1.25rem" }}
            onClick={() => {
              setIsTypeAdd(!isTypeAdd);
            }}
          />
        )}{" "}
      </Col>

      <Col
        md={isTypeAdd ? 3 : 11}
        xs={isTypeAdd ? 5 : 11}
        lg={isTypeAdd ? 4 : 11}
      >
        <SubType setSelectIdSubType={setSelectIdSubType} subtype={subtype} />
      </Col>
      {isTypeAdd ? (
        <Col md={2} xs={6} lg={5}>
          <Form.Control
            type="text"
            placeholder="ชื่อชนิด"
            onChange={() => {}}
          />
        </Col>
      ) : (
        <></>
      )}

      {isTypeAdd ? (
        <Col md={2} xs={"auto"} lg={2}>
          <Button className={width<=576 ? "mt-2" : ""}>เพิ่มชนิด</Button>
        </Col>
      ) : (
        <></>
      )}
    </Form.Group>
  );
}

export default SubTypeComponent;
