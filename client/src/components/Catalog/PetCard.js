import { Card, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function PetCard({pet}) {
  return (
    <Card>
      <Card.Img variant="top" src={pet.img} />
      <Card.Body>
        <Card.Title>{pet.name}</Card.Title>
        <Card.Text>
          <Image src="./images/hourglass-icon.svg" roundedCircle />
          Age: {pet.age} <br />
          <Image src="./images/gender-icon.svg" roundedCircle /> Gender: {pet.gender}
        </Card.Text>
        <Link to={`/catalog/details/${pet._id}`}>
          <Button variant="warning">Learn more about me</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
export default PetCard;
