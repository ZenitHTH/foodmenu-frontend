import { React, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import Type from "./type.selectDropdown.component";
import axios from "axios";

function Upload() {
  const [type, setType] = useState([]);
  const [subtype, setSubtype] = useState([]);
  const [selectIdType, setSelectIdType] = useState();
  const [selectIdSubType, setSelectIdSubType] = useState([]);
  const [namefood, setNamefood] = useState("");
  const [image, setImage] = useState(null);
  const fetchData = async () => {
    const fetching = async (type) => {
      const responese = await fetch(`http://localhost:4000/${type}`);
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

  const post = () =>{
    const data = new FormData();
    data.append("photos",image);
    data.append("namefood",namefood);
    data.append("idtype",selectIdType);
    data.append("idsubtype",selectIdSubType);

  }

  return (
    <Form>
      <Form.Group>
        <Form.Label>ชื่ออาหาร</Form.Label>
        <Form.Control
          type="text"
          placeholder="ชื่ออาหาร"
          onChange={(e) => {
            setNamefood(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>เลือกรูปอาหาร</Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Type</Form.Label>
        <Type type={type} setOutput={setSelectIdType} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Subtype</Form.Label>
        <Multiselect
          options={subtype}
          displayValue="name"
          closeIcon="close"
          onSelect={(selectedList, selectedItem) => {

            const result = selectedList.map((data,index)=>{
              return [...data._id]

            })
            console.log(result);

          }}
          onRemove={(selectedList, removedItem) => {
            const result = selectedList.map((data,index)=>{return [...data._id]})
            console.log(result);
          }}
        />
        <Button type="submit" onClick={post}>Sumbit</Button>
      </Form.Group>
    </Form>
  );
}

export default Upload;
