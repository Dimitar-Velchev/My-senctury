import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { getPetDetails, deletePet } from "../../services/petService";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

import "./PetDetails.css";

import QuestionBox from "./QuestionBox";
import ConfirmDelete from '../../common/ConfirmDelete';

function Details({ match, history }) {
  const { user } = useContext(AuthContext);
  const [pet, setPet] = useState({});
  const [showQuestBox, setQuestBox] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  useEffect(() => {
    getPetDetails(match.params.petId).then((result) => {
      setPet(result);
    });
  }, [match.params.petId]);

  const deleteClickHandler = (e) => {
    e.preventDefault();
    setShowDeleteDialog(true);
}

  const deleteHandler = () => {
    deletePet(match.params.petId, user.accessToken).then(() => {
      history.push("/catalog");
    });
  };

  const getStars = () => {
    const stars = [];
    let popular = pet.interested?.length;
    if (popular > 5) {
      popular = 5;
    }
    for (let i = 1; i <= 5; i++) {
      if (i <= popular) {
        stars.push(<Image alt="star" key={i} style={{color:'red'}} src='/images/star-fill.svg' />);
      } else {
        stars.push(<Image alt="star" key={i} src='/images/star.svg' />);
      }
    }
    return stars;
  };

  const ownerBtns = (
    <>
      <Link to={`/edit/${pet._id}`}>
        <Button variant="success">Update Info</Button>
      </Link>{" "}
      <Button variant="danger" onClick={deleteClickHandler}>
        Delete Pet
      </Button>
    </>
  );

  const userBtns = (
    <>
      <Button
        style={{ marginBottom: "10px" }}
        variant="outline-warning"
        onClick={() => setQuestBox(true)}
      >
        Ask about me
      </Button>
      {showQuestBox && (
        <QuestionBox pet={pet} setQuestBox={setQuestBox} history={history} />
      )}
    </>
  );

  return (
    <>
    <ConfirmDelete show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler} />
    <Container style={{ minHeight: "90vh" }}>
      <Row>
        <Col>
          <Image src={pet.img} thumbnail className="img-left"></Image>
        </Col>
        <Col>
          <div className="pet-info">
            <h5>Name: {pet.name} </h5>
            <h5>Age: {pet.age}</h5>
            <h5>Gender: {pet.gender}</h5>
            <h5>Category: {pet.category}</h5>
            <h5>
              My Info:
              <p>{pet.description}</p>
            </h5>
            <h5>
              Sprayed/Neutered:{" "}
              {pet.neutered ? (
                <Image src="/images/check-icon.svg" />
              ) : (
                <Image src="/images/cancel-icon.svg" />
              )}
            </h5>
            <h5>Owner email: {pet.owner?.email} </h5>
            <h5>How popular am I? {getStars()} </h5>

            {user._id && (user._id === pet.owner?._id ? ownerBtns : userBtns)}
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Details;
