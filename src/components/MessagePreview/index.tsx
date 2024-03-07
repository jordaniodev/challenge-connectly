import { CardMessagePreview } from "./CardMessagePreview";
import "./MessagePreview.scss";
export const MessagePreview = () => {
  return (
    <div className="message-preview">
      <div className="header">
        <img src="/imgs/icons/message-preview.svg" alt="Message Preview Icon" />
        <span className="title">Message Example</span>
      </div>
      <main>
        <CardMessagePreview />
      </main>
    </div>
  );
};
