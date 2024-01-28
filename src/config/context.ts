import { createContext } from "react";
import { MessageContextType } from "../types/context";
import { STATUS } from "./constants";

const MessageContext = createContext<MessageContextType>({
  status: STATUS.SUCCESS,
  messages: [],
  setMessages: (messages) => {
    return messages;
  },
  setStatus: (status: STATUS) => {
    return status;
  },
});

export default MessageContext;
