import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required().min(4).max(40),
  email: yup.string().required().email(),
  password: yup.string().required().min(6).max(20),
});

export default validationSchema;
