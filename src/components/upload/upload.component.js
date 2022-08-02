import { React, useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import Type from "./type.selectDropdown.component";
import axios from "axios";

function Upload({ hostname }) {
  const [type, setType] = useState([]);
  const [subtype, setSubtype] = useState([]);
  const [selectIdType, setSelectIdType] = useState();
  const [selectIdSubType, setSelectIdSubType] = useState([]);
  const [namefood, setNamefood] = useState("");
  const [pricefood, setPricefood] = useState(0);
  const [image, setImage] = useState(null);
  const [width] = useState(window.innerWidth);
  const fetchData = async () => {
    const fetching = async (type) => {
      const responese = await fetch(`http://${hostname}:4000/${type}`);
      const data = await responese.json();
      return data;
    };
    try {
      setType(await fetching("type"));
      setSubtype(await fetching("subtype"));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const post = () => {
    const data = new FormData();
    data.append("photos", image);
    data.append("namefood", namefood);
    data.append("idtype", selectIdType);
    data.append("idsubtype", selectIdSubType);
    data.append("pricefood", pricefood);
    axios.post(`http://${hostname}:4000/food`, data).then((res) => {
      console.log(res);
    });
  };

  return (
    <Container>
      <Form
        style={{
          width:
            width > 767 ? "60%" : width > 576 && width <= 767 ? "80%" : "100%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <Form.Group as={Col} style={{ textAlign: "center" }}>
          <Form.Label column="lg" lg={5} style={{ fontSize: "32px" }}>
            กรอกเพิ่มอาหาร
          </Form.Label>
        </Form.Group>
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
        <Form.Group as={Col} className="mb-2">
          <Form.Label>เลือกรูปอาหาร</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group as={Col} className="mb-2">
          <Form.Label>ประเภท</Form.Label>
          <Type type={type} setOutput={setSelectIdType} />
        </Form.Group>
        <Form.Group as={Col} className="mb-2">
          <Form.Label>ชนิด</Form.Label>
          <Multiselect
            options={subtype}
            displayValue="name"
            closeIcon="close"
            onSelect={(selectedList, selectedItem) => {
              const result = selectedList.map((data, index) => {
                return [...[data._id]];
              });
              setSelectIdSubType(result);
            }}
            onRemove={(selectedList, removedItem) => {
              const result = selectedList.map((data, index) => {
                return [...[data._id]];
              });
              setSelectIdSubType(result);
            }}
          />
        </Form.Group>
        <Form.Group as={Row} className="justify-content-center">
          <Col>
            <Button className="m-1" type="submit" onClick={post}>
              Submit
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Upload;
