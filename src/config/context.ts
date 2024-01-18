import { createContext } from "react";
import { MessageContextType } from "../types/context";

const MessageContext = createContext<MessageContextType>({
  isLoading: false,
  messages: [],
  setLoading: (isLoading) => {
    return isLoading;
  },
  setMessages: (messages) => {
    return messages;
  },
});

export default MessageContext;
