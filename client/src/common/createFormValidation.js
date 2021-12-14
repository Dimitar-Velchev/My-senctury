import * as yup from "yup";

const createFormSchema = yup.object().shape({
  name: yup.string().required("Please enter a name"),
  age: yup
    .number('Please enter a positive number')
    .typeError('Age must be a number')
    .required("Please enter an age")
    .positive("Age can't be a negative number"),
  img: yup.string().required("Please enter an image URL"),
  gender: yup.mixed().oneOf(["male", "female"], "Please select a valid gender").required(),
  category: yup.mixed().oneOf(["cat", "dog"], "Please select a valid category").required(),
  neutered: yup.bool()

});

export default createFormSchema;
