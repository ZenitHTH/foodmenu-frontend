import { React, useState, useEffect } from "react";
import { Form , Button} from "react-bootstrap";
import md5 from "md5";

function Login({}) {
  const [password, setPassword] = useState("");
  const [login,setLogin] = useState(false);
  return (
    <Form
      style={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}
    >
      <Form.Group className="m-2">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="m-2">
        <Button onClick={()=>{
          setLogin("76ff3842d04369033ee70cf56c418727" == md5(password) ? true : false);
          console.log(login)
        }} >Login</Button>
      </Form.Group>
    </Form>
  );
}

export default Login;
