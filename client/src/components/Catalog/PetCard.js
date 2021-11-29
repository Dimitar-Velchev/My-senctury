import {Card, Button, Image} from 'react-bootstrap';

function PetCard() {
    return (
        <Card>
        <Card.Img variant="top" src="./images/bunny.jfif" />
        <Card.Body>
          <Card.Title>Lucky</Card.Title> 
          <Card.Text>
          <Image src="./images/hourglass-icon.svg" roundedCircle />
            Age: 3 <br />
            <Image src="./images/gender-icon.svg" roundedCircle /> Gender: Male
          </Card.Text>
          <Button variant="warning">Learn more about me</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default PetCard;
  