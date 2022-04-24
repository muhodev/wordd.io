import { useState } from "react";
import {
  AppShell,
  Burger,
  Button,
  Header,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
  Group,
} from "@mantine/core";
import { useModals } from "@mantine/modals";

import { useAuth } from "hooks";
import { Logo } from "components";
import { MainLinks, User } from "./index";
import { CreateButton } from "./CreateButton";

export function AppLayout(props) {
  const modals = useModals();
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const { isLoggedIn, mounted } = useAuth();

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
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          padding="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 300, lg: 200 }}
        >
          <Navbar.Section>
            <MainLinks />
          </Navbar.Section>
          <Navbar.Section>
            <CreateButton />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} padding="md">
          <div className="flex items-center h-full">
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
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
              {mounted &&
                (isLoggedIn ? (
                  "Profil"
                ) : (
                  <Group>
                    <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                      <Button variant="default" onClick={openLoginModal}>
                        Log In
                      </Button>
                    </MediaQuery>
                    <Button onClick={openRegisterModal}>Sign Up</Button>
                  </Group>
                ))}
            </div>
          </div>
        </Header>
      }
    >
      {props.children}
    </AppShell>
  );
}
