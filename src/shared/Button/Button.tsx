import { FC } from "react";
import "./Button.css";

interface ButtonProps {
  content?: string;
  onClick?: () => void;
  cancel?: string;
}

const Button: FC<ButtonProps> = ({ content, onClick, children, cancel }) => {
  return (
    <button
      className={`AppButton ${cancel}`}
      onClick={onClick}>
      {content || children}
    </button>
  )
}

export default Button;