import { STATUS } from "../config/constants";
import type { MessagesType } from "./message";

export type MessageContextType = {
  messages: MessagesType;
  status: STATUS;
  setMessages: (messages: MessagesType) => void;
  setStatus: (status: STATUS) => void;
};
