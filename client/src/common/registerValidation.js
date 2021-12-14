import * as yup from "yup";

const registerSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(4, "Password must be between 4 and 12 characters")
    .max(12)
    .required(),
  rePass: yup.string().oneOf([yup.ref("password"), null]),
});

export default registerSchema;