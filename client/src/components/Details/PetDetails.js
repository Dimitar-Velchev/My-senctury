import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { getPetDetails, deletePet } from "../../services/petService";
import { AuthContext } from "../../contexts/AuthContext";


import "./PetDetails.css";

function Details({ match, history }) {
  const { user } = useContext(AuthContext);
  const [pet, setPet] = useState({});

  useEffect(() => {
    getPetDetails(match.params.petId).then((result) => {
      setPet(result);
    });
  }, [match.params.petId]);

  const deleteHandler = () => {
    deletePet(match.params.petId, user.accessToken).then(() => {
      history.push("/catalog");
    });
  };

  const ownerBtns = (
    <>
      <Button variant="success">Update Info</Button>{" "}
      <Button variant="danger" onClick={deleteHandler}>
        Delete Pet
      </Button>
    </>
  );

  const userBtns = (
    <>
      <Button variant="outline-warning">Ask about me</Button>
    </>
  );

  return (
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

            {user._id && (user._id === pet.owner?._id ? ownerBtns : userBtns)}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Details;
