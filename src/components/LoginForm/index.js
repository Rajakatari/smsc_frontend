import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./index.css";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const jwtToken = Cookies.get("jwt_token");
  const navigation = useNavigate();

  useEffect(() => {
    if (jwtToken !== undefined) {
      navigation("/", { replace: true });
    }
  }, [jwtToken, navigation]);

  const onSubmitForm = async (event) => {
    event.preventDefault();
    const data = {
      username: username,
      password: password,
    };

    //API call
    const loginUrl = "http://localhost:4000/login";

    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const data = await response.json();
      const { token } = data;

      Cookies.set("jwt_token", token, { expires: 1 });
      navigation("/", { replace: true });
    } else {
      const errorMsg = await response.json();

      setLoginError(errorMsg.error);
    }
  };
  return (
    <div className="login-form-main-container">
      <Form className="login-form" onSubmit={onSubmitForm}>
        <div>
          <img
            src="http://smsc2.tesync.net/SMSCLoginPage/images/Logo_login.png"
            alt="smsc-logo"
          />
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <p className="text-danger">{loginError}</p>
      </Form>
    </div>
  );
};

export default LoginForm;
