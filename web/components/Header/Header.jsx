import {
  Burger,
  Button,
  Group,
  Header,
  MediaQuery,
  useMantineTheme,
  Text,
} from "@mantine/core";
import { useModals } from "@mantine/modals";
import { Logo } from "components";

export default function _Header(props) {
  const theme = useMantineTheme();

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
    <Header height={70} padding="md">
      <div className="flex items-center h-full">
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={props.opened}
            onClick={() => props.setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <div className="flex items-center justify-between flex-1">
          <div className="flex items-center">
            <Text>
              <Logo />
            </Text>
          </div>
          <Group>
            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <Button variant="default" onClick={openLoginModal}>
                Log In
              </Button>
            </MediaQuery>
            <Button onClick={openRegisterModal}>Sign Up</Button>
          </Group>
        </div>
      </div>
    </Header>
  );
}
