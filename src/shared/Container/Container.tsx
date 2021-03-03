import { FC } from "react";

import "./Container.css";

const Container: FC = ({ children }) => {
  return (
    <div className="Container">
      {children}
    </div>
  )
}

export default Container;