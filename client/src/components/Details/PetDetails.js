import { Container, Row, Col, Image, Button } from "react-bootstrap";
import './PetDetails.css';

function Details() {
  return (
    <Container style={{ minHeight: "90vh" }}>
      <Row>
        <Col>
          <Image src="/images/bunny.jfif" thumbnail className="img-left"></Image>
        </Col>
        <Col>
          <div className="pet-info">
            <h5>Name: Lucky </h5>
            <h5>Age: 3</h5>
            <h5>Gender: Male</h5>
            <h5>Category: Cat</h5>
            <h5>
              My Info:{" "}
              <p>
                {" "}
                Lucky is yound and likes to play outside. She is not picky about
                her food and about other pets.
              </p>
            </h5>
            <h5>
              Sprayed/Neutered: <Image src="/images/check-icon.svg" />{" "}
              <Image src="/images/cancel-icon.svg" />{" "}
            </h5>
            <h5>Owner email: mxb.kativa@gmail.com </h5>
            <Button variant="outline-warning">Ask about me</Button>{" "}
            <Button variant="success">Update Info</Button>{" "}
            <Button variant="danger">Delete Pet</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Details;
