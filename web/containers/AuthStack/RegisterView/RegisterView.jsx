import {
  Button,
  Group,
  Text,
  TextInput,
  PasswordInput,
  Alert,
} from "@mantine/core";
import { useModals } from "@mantine/modals";
import { FiMail, FiLock, FiXCircle } from "react-icons/fi";
import { useFormik } from "formik";

import validationSchema from "./validationSchema";
import { useRegisterMutation } from "hooks";

export function RegisterView() {
  const modals = useModals();
  const registerMutation = useRegisterMutation();

  const onSubmitHandler = ({ name, email, password }) => {
    registerMutation.mutate(
      { name, email, password, passwordConfirm: password },
      {
        onSuccess: (response) => {
          console.log("Response", response);
        },
        onError: (error) => {
          console.log("Error", error?.response, error?.message);
        },
      }
    );
  };

  const {
    values,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    initialValues: { name: "", email: "", password: "" },
    onSubmit: onSubmitHandler,
    validationSchema,
  });

  const openLoginModal = () => {
    modals.openContextModal("login", {
      title: (
        <span>
          Log in to <strong>wordd.io</strong>
        </span>
      ),
      onClose: () => modals.closeAll(),
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Group direction="column" spacing="lg">
          {registerMutation.isError && (
            <Alert
              icon={<FiXCircle />}
              style={{ width: "100%" }}
              className="w-full"
              title="Error"
              color="red"
            >
              {registerMutation?.error?.response?.data?.message ||
                registerMutation?.error?.message ||
                "Unknow Error"}
            </Alert>
          )}
          <TextInput
            style={{ width: "100%" }}
            label="Name"
            name="name"
            value={values?.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors?.name && touched?.name && errors?.name}
            required
            variant="filled"
          />
          <TextInput
            style={{ width: "100%" }}
            label="Email"
            name="email"
            type="email"
            value={values?.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors?.email && touched?.email && errors?.email}
            required
            variant="filled"
            icon={<FiMail />}
          />
          <PasswordInput
            style={{ width: "100%" }}
            className="w-full"
            label="Password"
            name="password"
            value={values?.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors?.password && touched?.password && errors?.password}
            required
            variant="filled"
            icon={<FiLock />}
          />
          <Button
            fullWidth
            type="submit"
            loading={registerMutation?.isLoading}
            disabled={!isValid}
          >
            Sign Up
          </Button>
          <Group spacing="xs">
            <Text color="gray" size="sm">
              Already have an account?
            </Text>
            <Text
              variant="link"
              onClick={openLoginModal}
              size="sm"
              style={{ cursor: "pointer" }}
            >
              Log in
            </Text>
          </Group>
        </Group>
      </form>
    </>
  );
}
