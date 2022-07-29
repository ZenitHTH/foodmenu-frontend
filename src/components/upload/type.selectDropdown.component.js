import { Form } from "react-bootstrap";
import { React, useState } from "react";

function Type({ type, setOutput }) {
  return (
    <Form.Select
      onChange={(e) => {
        const found = type.find((obj) => {
          return obj._id === e.target.value;
        });
        setOutput(found);
      }}
    >
      <option>SelectType</option>
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
