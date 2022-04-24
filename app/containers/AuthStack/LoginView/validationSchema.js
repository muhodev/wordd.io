import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

export default validationSchema;
