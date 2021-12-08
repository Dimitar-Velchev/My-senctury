import { Form, Button } from "react-bootstrap";

function RegisterForm() {
  return (
    <div className="wrapper">
      <Form style={{width:"80%", margin:"30% 10% 30% 20%"}}>
       <img src="./images/user-icon.png" alt="user-icon" className="user-icon" />

        <Form.Group className="mb-3" >
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" autoComplete="off"/>
        </Form.Group>
      
        <Form.Group className="mb-3" >
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control type="re-pass" placeholder="Repeat Password" autoComplete="off" />
        </Form.Group>

        <Button variant="warning" type="submit">
          CREATE AND ACCESS
        </Button>
      </Form>
    </div>
  );
}

export default RegisterForm;
