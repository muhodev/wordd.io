import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { createStyles, useMantineTheme } from "@mantine/styles";
import { Button, Group, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  button: {
    // display: "block",
    // width: "100%",
    // marginTop: theme.spacing.xs,
    // padding: theme.spacing.xs,
    // borderRadius: theme.radius.sm,
    // color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    // "&:hover": {
    //   backgroundColor:
    //     theme.colorScheme === "dark"
    //       ? theme.colors.dark[6]
    //       : theme.colors.gray[0],
    // },
  },
}));

export function CreateButton() {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <div
      className="w-full"
      style={{
        paddingTop: theme.spacing.xl,
        borderTop: `1px solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      }}
    >
      <Button fullWidth className={classes.button}>
        Create New
      </Button>
    </div>
  );
}
