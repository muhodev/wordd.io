import React from "react";
import { createStyles } from "@mantine/styles";
import { ThemeIcon, UnstyledButton, Group, Text } from "@mantine/core";
import { FiHome, FiZap, FiFileText, FiStar, FiUsers } from "react-icons/fi";

import { Link } from "components";

const useStyles = createStyles((theme) => ({
  button: {
    display: "block",
    width: "100%",
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

function MainLink({ icon, color, label, url }) {
  const { classes } = useStyles();

  return (
    <UnstyledButton className={classes.button}>
      <Link href={url}>
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </Link>
    </UnstyledButton>
  );
}

const data = [
  { icon: <FiHome />, color: "blue", label: "Home", url: "/" },
  { icon: <FiZap />, color: "grape", label: "Words", url: "/words" },
  { icon: <FiFileText />, color: "lime", label: "Phrases", url: "/phrases" },
  { icon: <FiUsers />, color: "violet", label: "Forum", url: "/forum" },
  {
    icon: <FiStar />,
    color: "orange",
    label: "Collections",
    url: "/collections",
  },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
