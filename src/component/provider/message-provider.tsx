import { ReactNode, useState } from "react";
import MessageContext from "../../config/context";
import { MessagesType } from "../../types/message";
import { messageModel } from "../../model/message";
import { MessageContextType } from "../../types/context";

const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<MessagesType>(messageModel.get());
  const [isLoading, setLoading] = useState<boolean>(false);

  const providerValue: MessageContextType = {
    messages,
    isLoading,
    setMessages: () => setMessages(messageModel.get()),
    setLoading,
  };

  return (
    <MessageContext.Provider value={providerValue}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
