import { Form, Button } from "react-bootstrap";
import "./Create.css";

function Create() {
  return (
          <div className="create-form">
            <Form>
              <h1>Add A Pet Form</h1>
              <br />
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter pet name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="number" placeholder="Enter pet age" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter img URL" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" rows={3} placeholder="Please enter a brief description" />
              </Form.Group>

              <Form.Select aria-label="Default select example">
                <option>Please select a pet gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </Form.Select>
              <br />

              <Form.Select aria-label="Default select example">
                <option>Please select a pet category</option>
                <option value="1">Cat</option>
                <option value="2">Dog</option>
              </Form.Select>
              <br />

              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Check if the pet is neutered/sprayed." />
              </Form.Group>
          
              <Button variant="warning" type="submit">
                ADD A PET FOR ADOPTION
              </Button>
            </Form>
          </div>
  
  );
}

export default Create;
