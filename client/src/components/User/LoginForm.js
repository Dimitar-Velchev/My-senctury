import { Form, Button } from "react-bootstrap";

function LoginForm() {
  return (
    <div className="wrapper">
      <Form>
        <img
          src="./images/user-icon.png"
          alt="user-icon"
          className="user-icon"
        />
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" autoComplete="off" />
        </Form.Group>

        <Button variant="warning btn-primary" type="submit">
          LOGIN
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
