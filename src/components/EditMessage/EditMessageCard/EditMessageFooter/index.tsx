
import "./EditMessageFooter.scss";
import { CardTip } from "../../../CardTip";
import { EditMessageFooterProps } from "./EditMessageFooter.type";
import { useMessagePreview } from "../../../../hooks/MessagePreview/useMessagePreview";
export const EditMessageFooter = ({}: EditMessageFooterProps) => {

  const { messagePreview, setTextContent } = useMessagePreview();
  const onChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextContent('footer', event.target.value)
  }
  return (
    <div className="edit-message-footer">
      <textarea name="" id="" value={messagePreview.footer.text} onChange={onChangeTextArea}></textarea>
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
