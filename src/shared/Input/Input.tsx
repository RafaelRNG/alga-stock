import { FC, InputHTMLAttributes } from "react";
import "./Input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: FC<InputProps> = (props) => {

  return (
    <div className="AppInput">
      <label>
        <span>{props.label}</span>
        <input
          {...props} />
      </label>
    </div>
  )
}

export default Input;