import "./EditMessageBody.scss";
import { CardTip } from "../../../CardTip";
import { useMessagePreview } from "../../../../hooks/MessagePreview/useMessagePreview";
export const EditMessageBody = () => {

  const { messagePreview, setTextContent } = useMessagePreview();
  const onChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextContent('body', event.target.value)
  }

  return (
    <div className="edit-message-body">
      <textarea name="" id="" value={messagePreview.body.text} onChange={onChangeTextArea}></textarea>
      <div className="action-textarea">
        <span className="action-button">add variable</span>
        <ul>
          <li>
            <img src="/imgs/icons/smile.svg" alt="" />
          </li>
          <li>
            <img src="/imgs/icons/bold.svg" alt="" />
          </li>
          <li>
            <img src="/imgs/icons/dashed.svg" alt="" />
          </li>
          <li>
            <img src="/imgs/icons/italic.svg" alt="" />
          </li>
          <li>
            <img src="/imgs/icons/code.svg" alt="" />
          </li>
        </ul>
      </div>
      <CardTip
        urlAction="#"
        title="What are variables?"
        description="Variables are dynamic content that help personalize your campaign, for example: customer names or coupon codes."
      />
    </div>
  );
};
