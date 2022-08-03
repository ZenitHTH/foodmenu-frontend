import { Form } from "react-bootstrap";
import { React, useState } from "react";

function Type({ type, setOutput }) {
  return (
    <Form.Select
      onChange={(e) => {
        setOutput(e.target.value);
      }}
    >
      <option>เลือก</option>
      {type.map((data, index) => {
        return (
          <option value={data._id} key={index}>
            {data.name}
          </option>
        );
      })}
    </Form.Select>
  );
}

export default Type;
