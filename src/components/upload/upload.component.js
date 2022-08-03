import { React, useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import TypeComponent from "./typeComponent/type.formgroup.component";
import NameFood from "./namefood.control.component";
import PriceFood from "./pricefood.control.component";
import PhotoSelect from "./photosSelect.control.component";
import SubTypeComponent from "./subtypeComponent/subtype.formgroup.component";
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
  }, [type,subtype]);

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
        <NameFood setNamefood={setNamefood} />
        <PriceFood setPricefood={setPricefood} />
        <PhotoSelect setImage={setImage} />
        <TypeComponent
          setSelectIdType={setSelectIdType}
          type={type}
          hostname={hostname}
        />
        <SubTypeComponent
          setSelectIdSubType={setSelectIdSubType}
          subtype={subtype}
          hostname={hostname}
        />
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
