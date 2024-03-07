import { useState } from "react";
import { ButtonEditMessage } from "./EditMessageButton.type";
import "./EditMessageButton.scss";
import { useMessagePreview } from "../../../../hooks/MessagePreview/useMessagePreview";

export const EditMessageButton = () => {
  const { messagePreview, setNewButtons } = useMessagePreview();

  const handleInputChange = (index: number, value: string) => {
    const newButtons = [...buttons];
    newButtons[index]["label"] = value;
    setButtons(newButtons);
    setNewButtons(newButtons);
  };

  const deleteButton = (index: number) => {
    const newButtons = [...buttons];
    newButtons.splice(index, 1);
    setButtons(newButtons);
    setNewButtons(newButtons);
  };

  const addButton = () => {
    const newButtons = [...buttons, { key: buttons.length + 1, label: "" }];
    setButtons(newButtons);
    setNewButtons(newButtons);
  };


  const [buttons, setButtons] = useState(messagePreview.buttonsContent.buttons);
  return (
    <div className="listButtons">
      {buttons.map((button, index) => {
        return (
          <div className="container-input" key={button.key}>
            <div className="container-label">
              <label htmlFor={`input-${button.key}`}>Button {button.key}</label>
              <div className="container-actions">
                {index !== 0 || buttons.length > 1 ? (
                  <img
                    src="/imgs/icons/trash.svg"
                    alt=""
                    onClick={() => deleteButton(index)}
                  />
                ) : (
                  ""
                )}

                {index === buttons.length - 1 ? (
                  <img
                    src="/imgs/icons/plus.svg"
                    alt=""
                    onClick={() => addButton()}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <input
              type="text"
              id={`input-${button.key}`}
              maxLength={25}
              placeholder="Enter text"
              value={buttons[index].label}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
            <span className="length-label">
              {buttons[index].label.length} / 25
            </span>
          </div>
        );
      })}
    </div>
  );
};
