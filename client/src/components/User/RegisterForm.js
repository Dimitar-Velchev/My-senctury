import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { signup } from "../../services/userService";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ServerErrorMsg from '../../common/ServerErrorMsg';

const registerSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email().required('Please enter a valid email'),
  password: yup.string().min(4).max(12).required('Password must be between 4 and 12 characters'),
  rePass: yup.string().oneOf([yup.ref('password'), null]),

})


function RegisterForm({ history }) {
  const { loginUser } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema)
  });
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function registerHandler(data) {
   const {username, email, password} = data;
  
    signup(username, email, password)
      .then((res) => {
        loginUser(res);
        history.push("/catalog");
      })
      .catch((err) => {
        setError(err.message);
        handleShow()
      });
  }

  return (
    <div className="wrapper">
      <Form method="POST" onSubmit={handleSubmit(registerHandler)} noValidate>
        <img
          src="./images/user-icon.png"
          alt="user-icon"
          className="user-icon"
        />

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter username"
            {...register('username')}
          />
        </Form.Group>
        <span>{errors?.username?.message}</span>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" {...register('email')} />
          <span>{errors?.email?.message}</span>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
            {...register('password')}
          />
          <span>{errors?.password?.message}</span>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control
            type="password"
            name="rePass"
            placeholder="Repeat Password"
            autoComplete="off"
            {...register('rePass')}
          />
          <span>{errors?.rePass && 'Passwords don\'t match'}</span>
        </Form.Group>

        <Button variant="warning" type="submit">
          CREATE AND ACCESS
        </Button>
      </Form>
      {error ? <ServerErrorMsg show={show} error={error} handleClose={handleClose} /> : ""}
    </div>
  );
}

export default RegisterForm;
