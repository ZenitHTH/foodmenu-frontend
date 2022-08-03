import {Form ,Col} from "react-bootstrap";
import {React} from "react";

function PhotoSelect({setImage})
{
    return(
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


    );
}

export default PhotoSelect;