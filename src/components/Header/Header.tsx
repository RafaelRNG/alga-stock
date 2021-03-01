import { FC } from "react";
import "./Header.css";

interface HeaderProps {
  title: string
}

const Header: FC<HeaderProps> = (props) => {
  return (
    <header className="AppHeader">
      <h1>{props.title}</h1>

    </header>
  )
}

export default Header;