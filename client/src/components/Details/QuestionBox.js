import { Form, Row, Col, Button } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext";
import { useState, useEffect, useContext } from "react";
import "./PetDetails.css";


function QuestionBox({ pet, setQuestBox }) {
  const { user } = useContext(AuthContext);

  const cancelHandler = (e) => {
    e.preventDefault();
    setQuestBox(false);
  };

  const confirmHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="quest-box">
      <Form>
        <p>
          Please confirm your details below and we will get in touch as soon as
          possible to discuss <span>{pet.name}'s</span> future home! Thank you!
        </p>
        <Row>
          <Col>
            <Form.Control type="text" defaultValue={user.username} />
          </Col>
          <Col>
            <Form.Control type="email" defaultValue={user.email} />
          </Col>
        </Row>
        <Button variant="success" type="submit" onClick={confirmHandler}>
          Confirm
        </Button>
        <Button variant="warning" type="submit" onClick={cancelHandler}>
          Cancel
        </Button>
      </Form>
    </div>
  );
}

export default QuestionBox;
