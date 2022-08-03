import { Form, Col, Row , Button} from "react-bootstrap";
import { React , useState} from "react";
import { FaPlusCircle , FaMinusCircle} from "react-icons/fa";
import Type from "./type.selectDropdown.component";

function TypeComponent({setSelectIdType,type}) {
    const [isTypeAdd,setIsTypeAdd] = useState(false);
  return (
    <Form.Group as={Row} className="mb-2">
      <Form.Label>ประเภท</Form.Label>
      <Col md={isTypeAdd ? 3 : 11} xs={isTypeAdd ? 5 : 10}>
        <Type type={type} setOutput={setSelectIdType} />
      </Col>
      <Col md={1} xs={1}>
        { !isTypeAdd ? 
        <FaPlusCircle
          style={{ height: "100%", fontSize: "1.25rem" }}
          onClick={() => {
            setIsTypeAdd(!isTypeAdd);
          }}
        /> 
        :
        <FaMinusCircle  style={{ height: "100%", fontSize: "1.25rem" }}
          onClick={() => {
            setIsTypeAdd(!isTypeAdd);
          }} />
}
      </Col>
      {isTypeAdd ? (
        <>
          <Col md={2} xs={6}>
            <Form.Control
              type="text"
              placeholder="ชื่อประเภท"
              onChange={(e) => {}}
            />
          </Col>
          <Col md={2} xs={"auto"}>
            <Button className="mt-2">เพิ่มประเภท</Button>
          </Col>
        </>
      ) : (
        <></>
      )}
    </Form.Group>
  );
}

export default TypeComponent;
