import { HeaderProps } from "./Header.type";
import "./Header.scss";

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="header-component">
      <h1>{title}</h1>
      <div className="closeIconContainer">
        <img src={"/imgs/icons/close-icon.svg"} alt="" className="closeIcon" />
      </div>
    </header>
  );
};
