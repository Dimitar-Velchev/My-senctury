import { Form, Button } from "react-bootstrap";

function LoginForm() {
  return (
    <div>
      <Form style={{width:"80%", margin:"30% 10% 30% 20%"}}>
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      
        <Button variant="warning" type="submit">
          LOGIN
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
