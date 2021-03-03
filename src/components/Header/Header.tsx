import { FC } from "react";
import "./Header.css";

interface HeaderProps {
  title: string
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className="AppHeader">
      <h1>{title}</h1>

    </header>
  )
}

export default Header;