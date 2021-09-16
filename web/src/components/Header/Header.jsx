import { Logo } from "components";

export function Header(props) {
  return (
    <header className="border-b h-14 flex items-center">
      <div className="container flex items-center justify-between">
        <Logo />
      </div>
    </header>
  );
}
