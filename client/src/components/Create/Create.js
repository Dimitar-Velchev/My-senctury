import { Form, Button } from "react-bootstrap";
import "./Create.css";
import { createPet } from "../../services/petService";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ServerErrorMsg from "../../common/ServerErrorMsg";
import createFormSchema from "../../common/createFormValidation";
// import { Redirect } from "react-router-dom";

function Create({ history }) {
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createFormSchema),
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (!user.username) {
    history.push("/login");
  }

  function createHandler(data) {
    console.log(data);
    const { name, age, img, description, gender, category, neutered } = data;

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
        handleShow();
      });
  }
  return (
    <div className="create-form">
      <Form method="POST" onSubmit={handleSubmit(createHandler)} noValidate>
        <h1>ADD A PET FORM</h1>
        <br />
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter pet name"
            name="name"
            {...register("name")}
          />
          <span>{errors?.name?.message}</span>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter pet age"
            name="age"
            {...register("age")}
          />
          <span>{errors?.age?.message}</span>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter img URL"
            name="img"
            {...register("img")}
          />
          <span>{errors?.img?.message}</span>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Please enter a brief description"
            name="description"
          />
        </Form.Group>

        <Form.Select
          aria-label="Default select example"
          name="gender"
          {...register("gender")}
        >
          <option>Please select a pet gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Form.Select>
        <span>{errors?.gender?.message}</span>
        <br />

        <Form.Select
          aria-label="Default select example"
          name="category"
          {...register("category")}
        >
          <option>Please select a pet category</option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
        </Form.Select>
        <span>{errors?.category?.message}</span>
        <br />

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Check if the pet is neutered/sprayed."
            name="neutered"
            {...register("neutered")}
          />
          <span>{errors?.neutered?.message}</span>
        </Form.Group>

        <Button variant="warning" type="submit">
          ADD A PET FOR ADOPTION
        </Button>
      </Form>
      {error ? (
        <ServerErrorMsg show={show} error={error} handleClose={handleClose} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Create;
