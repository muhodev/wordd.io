import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { createStyles, useMantineTheme } from "@mantine/styles";
import { UnstyledButton, Group, Avatar, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  user: {
    display: "block",
    width: "100%",
    marginTop: theme.spacing.xs,
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

export function User() {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <div
      style={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      }}
    >
      <UnstyledButton className={classes.user}>
        <Group>
          <Avatar
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            radius="xl"
          />
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              Profile
            </Text>
          </div>

          <FiChevronRight />
        </Group>
      </UnstyledButton>
    </div>
  );
}
