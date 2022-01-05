import {
  Button,
  Group,
  TextInput,
  Text,
  PasswordInput,
  Alert,
} from "@mantine/core";
import { useModals } from "@mantine/modals";
import { useNotifications } from "@mantine/notifications";
import { FiMail, FiLock, FiXCircle } from "react-icons/fi";
import { useFormik } from "formik";

import { useAuth } from "hooks";
import validationSchema from "./validationSchema";

export function LoginView() {
  const modals = useModals();
  const { login, loginMutation } = useAuth();
  const notifications = useNotifications();

  const onSubmitHandler = ({ email, password }) => {
    login(
      { email, password },
      {
        onSuccess: () => {
          modals.closeAll();
          notifications.showNotification({
            title: "Success",
            message: "Success login 🎉",
          });
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
    initialValues: { email: "", password: "" },
    onSubmit: onSubmitHandler,
    validationSchema,
  });

  const openRegisterModal = () => {
    modals.openContextModal("signup", {
      title: (
        <span>
          Join <strong>wordd.io</strong>
        </span>
      ),
      onClose: () => modals.closeAll(),
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Group direction="column" spacing="lg">
          {loginMutation.isError && (
            <Alert
              icon={<FiXCircle />}
              style={{ width: "100%" }}
              className="w-full"
              title="Error"
              color="red"
            >
              {loginMutation?.error?.response?.data?.message ||
                loginMutation?.error?.message ||
                "Unknow Error"}
            </Alert>
          )}
          <TextInput
            style={{ width: "100%" }}
            label="Email"
            required
            name="email"
            value={values?.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors?.email && touched?.email && errors?.email}
            variant="filled"
            icon={<FiMail />}
          />
          <PasswordInput
            style={{ width: "100%" }}
            className="w-full"
            label="Password"
            required
            name="password"
            value={values?.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors?.password && touched?.password && errors?.password}
            variant="filled"
            icon={<FiLock />}
          />
          <Button
            loading={loginMutation?.isLoading}
            type="submit"
            fullWidth
            disabled={!isValid}
          >
            Log In
          </Button>
          <Group spacing="xs">
            <Text color="gray" size="sm">
              Don't have an account?
            </Text>
            <Text
              onClick={openRegisterModal}
              variant="link"
              size="sm"
              style={{ cursor: "pointer" }}
            >
              Sign up
            </Text>
          </Group>
        </Group>
      </form>
    </>
  );
}
