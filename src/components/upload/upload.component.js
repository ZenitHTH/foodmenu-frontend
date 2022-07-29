import { React, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import Type from "./type.selectDropdown.component";

function Upload() {
  const [type, setType] = useState([]);
  const [subtype, setSubtype] = useState([]);
  const [selectType, setSelectType] = useState();
  const [selectSubType, setSelectSubType] = useState([]);
  const [submit, setSumbit] = useState(false);
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

  return (
    <Form>
      <Form.Label>Type</Form.Label>
      <Type type={type} setOutput={setSelectType} />
      <Form.Label>Subtype</Form.Label>
      <Multiselect
        options={subtype}
        displayValue="name"
        closeIcon="close"
        onSelect={(selectedList, selectedItem) => {
          setSelectSubType(selectedList);
        }}
        onRemove={(selectedList, removedItem) => {
          setSelectSubType(selectedList);
        }}
      />
    </Form>
  );
}

export default Upload;
