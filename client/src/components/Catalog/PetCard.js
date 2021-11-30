import {Card, Button, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

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
          <Link to={`/catalog/details/:id`}>
          <Button variant="warning">Learn more about me</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
  
  export default PetCard;
  

