import { ButtonProps } from "./Button.type";
import './Button.scss'
export const Button = ({ children, category = 'filled', ...props }: ButtonProps) => {
  return <button className={`${category} btn`} {...props}>{children}</button>;
};
