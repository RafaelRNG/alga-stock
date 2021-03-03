import { FC } from "react";
import "./Button.css";

interface ButtonProps {
  content?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ content, onClick, children }) => {
  return (
    <button
      className="AppButton"
      onClick={onClick}>
      {content || children}
    </button>
  )
}

export default Button;