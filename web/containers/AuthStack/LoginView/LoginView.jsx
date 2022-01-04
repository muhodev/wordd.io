import { Button, Group, TextInput, Text, PasswordInput } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { FiMail, FiLock } from "react-icons/fi";

export function LoginView({ context, id }) {
  const modals = useModals();

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
      <form>
        <Group direction="column" spacing="lg">
          <TextInput
            style={{ width: "100%" }}
            label="Email"
            required
            variant="filled"
            icon={<FiMail />}
          />
          <PasswordInput
            style={{ width: "100%" }}
            className="w-full"
            label="Password"
            required
            variant="filled"
            icon={<FiLock />}
          />
          <Button fullWidth>Log In</Button>
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
