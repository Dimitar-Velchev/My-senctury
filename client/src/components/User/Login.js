import {Row, Col} from 'react-bootstrap';

import ImageBackground from "./ImageBackground";
import LoginForm from "./LoginForm";


function Login() {
  return (
    <Row className="container" style={{minHeight:"70vh"}}>
      <Col><ImageBackground /></Col>
      <Col><LoginForm /></Col>
    </Row>
  );
}

export default Login;
