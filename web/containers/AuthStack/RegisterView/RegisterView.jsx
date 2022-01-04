import { Button, Group, Text, TextInput, PasswordInput } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { FiMail, FiLock } from "react-icons/fi";

export function RegisterView({ context, id }) {
  const modals = useModals();

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
      <form>
        <Group direction="column" spacing="lg">
          <TextInput
            style={{ width: "100%" }}
            label="Name"
            required
            variant="filled"
          />
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
          <Button fullWidth>Sign Up</Button>
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
