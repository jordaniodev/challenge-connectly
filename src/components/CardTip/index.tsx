import { CardTipProps } from "./CardTip.type";
import "./CardTip.scss";
import { useState } from "react";

export const CardTip = ({ title, description, urlAction }: CardTipProps) => {
  const [isVisible, setIsVisible] = useState(true);

  return isVisible ? (
    <div className="card-tip">
      <div className="header-card">
        <div className="title-card">
          <img src="/imgs/icons/tip-icon.svg" alt="" />
          <span>{title}</span>
        </div>
        <img
          src="/imgs/icons/minus.svg"
          alt="close-icon"
          onClick={() => setIsVisible(false)}
        />
      </div>
      <p>{description}</p>
      {urlAction ? <a href={urlAction}>Learn More</a> : ""}
    </div>
  ) : (
    ""
  );
};
