import { Button, Container, Grid } from "@mantine/core";
import { Logo } from "components";

export function Header(props) {
  return (
    <header>
      <Container>
        <Grid align="center" justify="space-between">
          <Grid.Col span={8}>
            <Logo />
          </Grid.Col>
          <Grid.Col span={4}>
            <Button>Login</Button>
          </Grid.Col>
        </Grid>
      </Container>
    </header>
  );
}
