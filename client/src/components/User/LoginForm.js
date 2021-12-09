import { Form, Button } from "react-bootstrap";
import { login } from "../../services/userService";

function LoginForm({ history }) {
  async function loginHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let email = formData.get("email");
    let password = formData.get("password");

    login(email, password)
      .then((res) => {
        console.log(res);
        history.push("/catalog");
      })
      .catch((err) => {
        window.alert(err.message);
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
    </div>
  );
}

export default LoginForm;
