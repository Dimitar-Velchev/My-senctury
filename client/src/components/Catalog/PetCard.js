import {Card, Button, Image} from 'react-bootstrap';

function PetCard() {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./images/reg-form-puppy.jpg" />
        <Card.Body>
          <Card.Title>Lucky</Card.Title> 
          <Card.Text>
          <Image src="./images/hourglass-icon.svg" roundedCircle />
            Age: 3 <br />
            <Image src="./images/gender-icon.svg" roundedCircle /> Gender: Male
          </Card.Text>
          <Button variant="warning">Learn more about...</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default PetCard;
  