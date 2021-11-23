import {Row, Col} from 'react-bootstrap';

import ImageBackground from "./ImageBackground";
import RegisterForm from "./RegisterForm";


function Register() {
  return (
    <Row className="container" style={{minHeight:"70vh"}}>
      <Col><ImageBackground /></Col>
      <Col><RegisterForm /></Col>
    </Row>
  );
}

export default Register;
