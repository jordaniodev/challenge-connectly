import { ReactNode } from "react";
import { ButtonEditMessage } from "./../../components/EditMessage/EditMessageCard/EditMessageButton/EditMessageButton.type";

export interface MessagePreview {
  body: {
    isVisible: boolean;
    text: string;
  };
  footer: {
    isVisible: boolean;
    text: string;
  };
  buttonsContent: {
    isVisible: boolean;
    buttons: ButtonEditMessage[];
  };
  header: {
    isVisible: boolean;
    imageBase64: string;
  };
}

export interface MessagePreviewContextData {
  messagePreview: MessagePreview;
  setImageHeader: (imageBase64: string) => void;
  setVisibleContent: (
    contentType: keyof MessagePreview,
    visibility: boolean
  ) => void;
  setNewButtons: (buttons: ButtonEditMessage[]) => void;
  setTextContent: (contentType: "footer" | "body", newText: string) => void;
}

export interface MessagePreviewProviderProps {
  children: ReactNode;
}
