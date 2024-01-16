import { createContext } from "react";
import { MessageContextType } from "../types/context";

const MessageContext = createContext<MessageContextType>({
  messages: [],
  setMessages: (messages) => {
    return messages;
  },
});

export default MessageContext;
