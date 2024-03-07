import { EditMessageCardProps } from "./EditMessageCard.type";
import "./EditMessageCard.scss";
import { Switch } from "@mui/material";
import { useState } from "react";
export const EditMessageCard = ({
  isRequired,
  isActive,
  title,
  changeValue,
  children,
  titleIcon,
  changeVisibility,
  titleTooltipMessage = "",
}: EditMessageCardProps) => {
  const [seeMain, setSeeMain] = useState(isActive);

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>, title: string) => {
    setSeeMain(event.target.checked);
    changeVisibility(event.target.checked)
    changeValue(event, title)
  }
  return (
    <div className="card-edit">
      <div className="card-header">
        <div className="container-title">
          <img src={titleIcon} alt={title} className="image-header" />
          <h4>{title}</h4>
          <img
            src="/imgs/icons/tooltip.svg"
            alt=""
            className="toolTip"
            title={titleTooltipMessage}
          />
          {isRequired ? (
            <span className="required-message">required</span>
          ) : (
            <></>
          )}
        </div>
        {!isRequired ? (
          <Switch
            data-testid="switch"
            defaultChecked={isActive}
            onChange={(event) => onChangeValue(event, title)}
          />
        ) : (
          ""
        )}
      </div>
      {(seeMain || isRequired) ? <main>{children}</main> : ''}
    </div>
  );
};
