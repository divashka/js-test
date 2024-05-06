import baseStyles from "../../index.module.scss";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  nameClass?: string;
};

function Button({ children, nameClass }: ButtonProps): JSX.Element {
  return (
    <div className={`${baseStyles.btnWrap} ${nameClass ?? ''}`}>
      <div className={baseStyles.shadow}></div>
      {children}
    </div>
  );
}

export default Button;
