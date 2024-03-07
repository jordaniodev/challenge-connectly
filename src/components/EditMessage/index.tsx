import { Button } from "../Button";

import "./EditMessage.scss";
import { EditMessageCardProps } from "./EditMessageCard/EditMessageCard.type";
import { EditMessageCard } from "./EditMessageCard/index";
import { useState } from "react";
import { EditMessageHeader } from "./EditMessageCard/EditMessageHeader";
import { EditMessageBody } from "./EditMessageCard/EditMessageBody";
import { EditMessageFooter } from "./EditMessageCard/EditMessageFooter";
import { EditMessageButton } from "./EditMessageCard/EditMessageButton/index";
import { useMessagePreview } from "../../hooks/MessagePreview/useMessagePreview";
import { MessagePreview } from "../../hooks/MessagePreview/useMessagePreview.type";
export const EditMessage = () => {
  const { messagePreview, setVisibleContent } = useMessagePreview();

  const onChangeValue = (
    event: React.ChangeEvent<HTMLInputElement>,
    title: string
  ) => {
    const value = event.target.checked;
    if (!value) {
      const newListCard = [...listCard];
      newListCard.find((card) => card.title === title)!.isActive = false;
      setListCard(newListCard);
    }
  };
  const cardsEditable: Omit<EditMessageCardProps, "changeVisibility">[] = [
    {
      changeValue: onChangeValue,
      isActive: messagePreview.header.isVisible,
      titleIcon: "/imgs/icons/header-icon.svg",
      isRequired: false,
      title: "Header",
      children: <EditMessageHeader />,
    },
    {
      changeValue: onChangeValue,
      titleIcon: "/imgs/icons/body-message.svg",
      isRequired: true,
      title: "Body message",
      children: <EditMessageBody />,
    },
    {
      changeValue: onChangeValue,
      isActive: messagePreview.footer.isVisible,
      titleIcon: "/imgs/icons/body-message.svg",
      isRequired: false,
      title: "Footer text",
      children: <EditMessageFooter />,
    },
    {
      changeValue: onChangeValue,
      isActive: messagePreview.buttonsContent.isVisible,
      titleIcon: "/imgs/icons/buttons.svg",
      isRequired: false,
      title: "Buttons",
      children: <EditMessageButton />,
    },
  ];

  const onChangeVisibility = (valueVisibility: boolean, content: string) => {
    const mapTitle: any = {
      Buttons: "buttonsContent",
      "Footer text": "footer",
      "Body message": "body",
      Header: "header",
    };

    setVisibleContent(mapTitle[content] as keyof MessagePreview, valueVisibility);
  };

  const [listCard, setListCard] = useState(cardsEditable);
  return (
    <>
      <div className="edit-message-container">
        <div className="header">
          <h2>Edit Message</h2>
          <div className="closeIconContainer">
            <img
              src={"/imgs/icons/close-icon.svg"}
              alt=""
              className="closeIcon"
            />
          </div>
        </div>
        <main>
          <h4>Content</h4>
          <div className="content-cards">
            {listCard.map((card, index) => {
              return (
                <EditMessageCard
                  isRequired={card.isRequired}
                  title={card.title}
                  titleIcon={card.titleIcon}
                  titleTooltipMessage={card.titleTooltipMessage}
                  isActive={card.isActive}
                  key={index}
                  changeValue={card.changeValue}
                  changeVisibility={(value: boolean) =>
                    onChangeVisibility(value, card.title)
                  }
                >
                  {card.children}
                </EditMessageCard>
              );
            })}
          </div>
        </main>
      </div>
      <footer className="edit-message-footer">
        <Button category="filled">Save</Button>
        <Button category="outlined">Delete</Button>
      </footer>
    </>
  );
};
