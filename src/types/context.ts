import type { MessagesType } from "./message";

export type MessageContextType = {
  messages: MessagesType;
  setMessages: (messages: MessagesType) => void;
};
