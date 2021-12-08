import { Row, Col, Container } from "react-bootstrap";

import ImageBackground from "./ImageBackground";
import LoginForm from "./LoginForm";
import "./User.css";

function Login({history}) {
  return (
    <Container fluid="md" style={{ minHeight: "90vh" }}>
      <Row>
        <Col>
          <LoginForm history={history} />
        </Col>
        <Col>
          <ImageBackground />
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
