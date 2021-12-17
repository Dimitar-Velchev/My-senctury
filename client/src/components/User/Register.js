import { Row, Col, Container } from "react-bootstrap";

import ImageBackground from "./ImageBackground";
import RegisterForm from "./RegisterForm";

import './User.css';

function Register({history}) {
  return (
    <Container fluid="md" style={{ minHeight: "90vh" }}>
      <Row>
        <Col>
          <RegisterForm history={history} />
        </Col>
        <Col>
          <ImageBackground />
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
