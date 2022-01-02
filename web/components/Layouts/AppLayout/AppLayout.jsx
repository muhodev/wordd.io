import { Header } from "components";

export function AppLayout(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
}
