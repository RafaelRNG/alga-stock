import { FC, FormEvent } from "react";
import "./Form.scss";

interface FormProps {
  title?: string;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

const Form: FC<FormProps> = ({ title, onSubmit, children }) => {

  const preventSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmit && onSubmit(event);
  }

  return (
    <form
      onSubmit={preventSubmit}
      className="AppForm">
      {title && <div className="Title">
        {title}
      </div>}
      {children}
    </form>
  )

}

export default Form;