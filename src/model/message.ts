import type { MessagesType, MessageType } from "../types/message";
import { messageLocalstorage } from "../utils/localstorage";

export const messageModel = {
  get() {
    try {
      const messages: MessagesType = JSON.parse(
        messageLocalstorage.get() || "[]"
      ) as MessagesType;
      return messages;
    } catch (error) {
      return [];
    }
  },
  append(data: MessageType) {
    const messages = this.get();
    messages.push(data);
    messageLocalstorage.set(JSON.stringify(messages));
    return messages;
  },
};
