import { AppLayout } from "components";

export default function Home(props) {
  return (
    <AppLayout>
      <div>Home</div>
    </AppLayout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
