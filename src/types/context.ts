import type { MessagesType } from "./message";

export type MessageContextType = {
  isLoading: boolean;
  messages: MessagesType;
  setLoading: (isLoading: boolean) => void;
  setMessages: (messages: MessagesType) => void;
};
