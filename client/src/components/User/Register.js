import { Row, Col, Container } from "react-bootstrap";

import ImageBackground from "./ImageBackground";
import RegisterForm from "./RegisterForm";
import './User.css';

function Register() {
  return (
    <Container fluid="md" style={{ minHeight: "80vh" }}>
      <Row>
        <Col>
          <RegisterForm />
        </Col>
        <Col>
          <ImageBackground />
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
