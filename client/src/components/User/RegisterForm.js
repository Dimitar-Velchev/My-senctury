import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { register } from "../../services/userService";

function RegisterForm({ history }) {
  const { loginUser } = useContext(AuthContext);

  function registerHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let username = formData.get("username");
    let email = formData.get("email");
    let password = formData.get("password");

    register(username, email, password)
      .then((res) => {
        loginUser(res);
        history.push("/catalog");
      })
      .catch((err) => {
        window.alert(err.message);
      });
  }

  return (
    <div className="wrapper">
      <Form method="POST" onSubmit={registerHandler}>
        <img
          src="./images/user-icon.png"
          alt="user-icon"
          className="user-icon"
        />

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter username"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control
            type="password"
            name="re-pass"
            placeholder="Repeat Password"
            autoComplete="off"
          />
        </Form.Group>

        <Button variant="warning" type="submit">
          CREATE AND ACCESS
        </Button>
      </Form>
    </div>
  );
}

export default RegisterForm;
