import { ReactNode, useState } from "react";
import MessageContext from "../../config/context";
import { MessagesType } from "../../types/message";
import { messageModel } from "../../model/message";
import { MessageContextType } from "../../types/context";
import { STATUS } from "../../config/constants";

const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<MessagesType>(messageModel.get());
  const [status, setStatus] = useState<STATUS>(STATUS.SUCCESS);

  const providerValue: MessageContextType = {
    messages,
    status,
    setMessages: () => setMessages(messageModel.get()),
    setStatus,
  };

  return (
    <MessageContext.Provider value={providerValue}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
