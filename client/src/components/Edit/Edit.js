import { Form, Button } from "react-bootstrap";
import "./Edit.css";
import { updatePet, getPetDetails } from "../../services/petService";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ServerErrorMsg from "../../common/ServerErrorMsg";
import createFormSchema from "../../common/createFormValidation";


function Edit({ history, match }) {
  const [pet, setPet] = useState({});
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    
  } = useForm({
    resolver: yupResolver(createFormSchema),
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getPetDetails(match.params.petId).then((result) => {
      setPet(result);
      reset(result.data);
    });
  }, [match.params.petId]);

  function editHandler(data) {

    const { name, age, img, description, gender, category, neutered } = data;
    console.log(gender)
    console.log(category)
    updatePet(
      {
        name,
        age,
        img,
        description,
        gender,
        category,
        neutered,
      },
      user.accessToken,
      pet._id
    )
      .then((result) => {
        history.push("/catalog");
      })
      .catch((err) => {
        setError(err.message);
        handleShow();
      });
  }

  const changeCategory = (e) =>{
      setPet(s => ({...s, category: e.target.value}));
      console.log(pet)
  }
  return (
    <div className="edit-form">
      <Form method="POST" onSubmit={handleSubmit(editHandler)} noValidate>
        <h1>UPDATE PET INFO</h1>
        <br />
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter pet name"
            name="name"
            defaultValue={pet.name}
            {...register("name")}
          />
          <span>{errors?.name?.message}</span>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter pet age"
            name="age"
            defaultValue={pet.age}
            {...register("age")}
          />
          <span>{errors?.age?.message}</span>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter img URL"
            name="img"
            defaultValue={pet.img}
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
            defaultValue={pet.description}
            {...register("description")}
          />
        </Form.Group>

        <Form.Select
          aria-label="Default select example"
          name="gender"
        // value={pet.gender}
          defaultValue={pet.gender}
          onChange={(e) => setPet(s => ({...s, gender: e.target.value}))}
          {...register("gender")}
        >
          <option value='select'>Please select a gender category</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Form.Select>
        <span>{errors?.gender?.message}</span>
        <br />

        <Form.Select
          aria-label="Default select example"
          name="category"
         //value={pet.category}
         defaultValue={pet.category}
          onChange={changeCategory}
         {...register("category")}
        >
          <option value='select'>Please select a pet category</option>
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
          UPDATE YOUR PET NOW
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

export default Edit;