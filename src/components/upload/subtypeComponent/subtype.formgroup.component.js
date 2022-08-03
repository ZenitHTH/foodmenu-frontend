import { Form, Col, Row, Button } from "react-bootstrap";
import { React, useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import SubType from "./subtype.multiselectDropdown.component";
import axios from "axios";

function SubTypeComponent({ setSelectIdSubType, subtype, hostname }) {
  const [isSubtypeAdd, setIsSubtypeAdd] = useState(false);
  const [subTypeAdd, setSubtypeAdd] = useState("");
  const [width] = useState(window.innerWidth);
  const addSubType = () => {
    axios.post(`http://${hostname}:4000/subtype`, {name:subTypeAdd}).then((res) => {
      console.log(res);
    });
  };
  return (
    <Form.Group as={Row} className="mb-2">
      <Form.Label>ชนิด</Form.Label>
      <Col md={1} xs={1} lg={1}>
        {isSubtypeAdd ? (
          <FaMinusCircle
            className=""
            style={{ height: "100%", fontSize: "1.25rem" }}
            onClick={() => {
              setIsSubtypeAdd(!isSubtypeAdd);
            }}
          />
        ) : (
          <FaPlusCircle
            className=""
            style={{ height: "100%", fontSize: "1.25rem" }}
            onClick={() => {
              setIsSubtypeAdd(!isSubtypeAdd);
            }}
          />
        )}{" "}
      </Col>

      <Col
        md={isSubtypeAdd ? 3 : 11}
        xs={isSubtypeAdd ? 5 : 11}
        lg={isSubtypeAdd ? 4 : 11}
      >
        <SubType setSelectIdSubType={setSelectIdSubType} subtype={subtype} />
      </Col>
      {isSubtypeAdd ? (
        <Col md={2} xs={6} lg={5}>
          <Form.Control
            type="text"
            placeholder="ชื่อชนิด"
            onChange={(e) => {
              setSubtypeAdd(e.target.value);
            }}
          />
        </Col>
      ) : (
        <></>
      )}

      {isSubtypeAdd ? (
        <Col md={2} xs={"auto"} lg={2}>
          <Button className={width <= 576 ? "mt-2" : ""} onClick={addSubType}>
            เพิ่มชนิด
          </Button>
        </Col>
      ) : (
        <></>
      )}
    </Form.Group>
  );
}

export default SubTypeComponent;
