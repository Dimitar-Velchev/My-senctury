import { useContext } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

import { AuthContext } from "../../contexts/AuthContext";
import {showInterest} from '../../services/petService';

import "./PetDetails.css";


function QuestionBox({ pet, setQuestBox, history }) {
  const { user } = useContext(AuthContext);
  const cancelHandler = (e) => {
    e.preventDefault();
    setQuestBox(false);
  };

  const confirmHandler = (e) => {
    e.preventDefault();
    showInterest(pet._id,user.accessToken).then((res)=> {
        history.push(`/catalog/details/${pet._id}/thanks`)
      })
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
            <Form.Control type="text" placeholder='Username' defaultValue={user.username} />
          </Col>
          <Col>
            <Form.Control type="email" placeholder='Email address' defaultValue={user.email} />
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
