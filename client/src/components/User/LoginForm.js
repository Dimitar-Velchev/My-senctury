import { Form, Button} from "react-bootstrap";
import { login } from "../../services/userService";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import ServerErrorMsg from '../../common/ServerErrorMsg';

function LoginForm({ history }) {
  const { loginUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function loginHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let email = formData.get("email");
    let password = formData.get("password");

    login(email, password)
      .then((res) => {
        console.log(res);
        loginUser(res);
        history.push("/catalog");
      })
      .catch((err) => {
        setError(err.message);
        handleShow();
      });
  }

  return (
    <div className="wrapper">
      <Form method="POST" onSubmit={loginHandler}>
        <img
          src="./images/user-icon.png"
          alt="user-icon"
          className="user-icon"
        />
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="off"
          />
        </Form.Group>

        <Button variant="warning btn-primary" type="submit">
          LOGIN
        </Button>
      </Form>
      {error ? <ServerErrorMsg show={show} error={error} handleClose={handleClose} /> : ""}
    </div>
  );
}

export default LoginForm;
