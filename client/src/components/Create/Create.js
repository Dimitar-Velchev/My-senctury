import { Form, Button } from "react-bootstrap";
import "./Create.css";
import { createPet } from "../../services/petService";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import ServerErrorMsg from '../../common/ServerErrorMsg';


function Create({ history }) {
  const { user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function createHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let name = formData.get("name");
    let age = formData.get("age");
    let img = formData.get("img");
    let description = formData.get("description");
    let gender = formData.get("gender");
    let category = formData.get("category");
    let neutered = Boolean(formData.get("neutered"));

    createPet(
      {
        name,
        age,
        img,
        description,
        gender,
        category,
        neutered,
      },
      user.accessToken
    )
      .then((result) => {
        history.push("/catalog");
      })
      .catch((err) => {
        setError(err.message);
        handleShow() 
       });

    e.currentTarget.reset();

  }
  return (
    <div className="create-form">
      <Form method="POST" onSubmit={createHandler}>
        <h1>ADD A PET FORM</h1>
        <br />
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter pet name" name="name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="number" placeholder="Enter pet age" name="age" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter img URL" name="img" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Please enter a brief description"
            name="description"
          />
        </Form.Group>

        <Form.Select aria-label="Default select example" name="gender">
          <option>Please select a pet gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Form.Select>
        <br />

        <Form.Select aria-label="Default select example" name="category">
          <option>Please select a pet category</option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
        </Form.Select>
        <br />

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Check if the pet is neutered/sprayed."
            name="neutered"
          />
        </Form.Group>

        <Button variant="warning" type="submit">
          ADD A PET FOR ADOPTION
        </Button>
      </Form>
      {error ? <ServerErrorMsg show={show} error={error} handleClose={handleClose} /> : ""}
    </div>
  );
}

export default Create;
