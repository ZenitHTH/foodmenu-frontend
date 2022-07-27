import { React, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";

function Upload() {
  const [type, setType] = useState([]);
  const [subtype, setSubtype] = useState([]);
  const [selectType, setSelectType] = useState();
  const [selectSubType, setSelectSubType] = useState([]);
  const fetchData = async () => {
    const fetching = async (type) => {
      const responese = await fetch(`http://localhost:4000/${type}`);
      const data = await responese.json();
      return data;
    };
    try {
      setType(await fetching("type"));
      //setSelectType(type[0]);
      setSubtype(await fetching("subtype"));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [selectType, selectSubType]);

  return (
    <Form>
      <Form.Label>Type</Form.Label>
      <Form.Control
        as="select"
        value={setSelectType}
        onChange={(e) => {
          console.log(e.target.value);
          setSelectType(e.target.value);
        }}
      >
        {type.map((data, index) => {
          return <option value={data}>{data.name}</option>;
        })}
      </Form.Control>
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
