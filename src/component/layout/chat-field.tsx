import ReactTextareaAutosize from "react-textarea-autosize";
import SendIcon from "../icons/send";
import Container from "../shared/container";
import React, { useRef } from "react";
import { messageModel } from "../../model/message";
import { useMessages } from "../../hooks/message";
import { messageServices } from "../../services/message";
import { jumpToDown } from "../../utils/jump-to-down";
import { messageLocalstorage } from "../../utils/localstorage";

const ChatField = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { setMessages, isLoading, setLoading } = useMessages();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isLoading) {
      try {
        setLoading(true);
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        if (data?.message && typeof data.message === "string") {
          messageModel.append({
            message: data.message,
            isUser: true,
          });

          setMessages(messageModel.get());
          jumpToDown();

          if (textareaRef.current) {
            textareaRef.current.value = "";
          }
          const historyString = messageLocalstorage.get();
          let history = historyString ? JSON.parse(historyString) : null;
          if (history !== null) {
            history = history.slice(-11);
            history.pop();
          }
          const response = await messageServices.send(data.message, history);

          messageModel.append({
            message: response.answer,
            isUser: false,
          });

          setMessages(messageModel.get());

          setLoading(false);
          jumpToDown();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleKeyPressEnter = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (["Enter", "NumpadEnter", "\n"].includes(event.key) && !event.shiftKey) {
      event.preventDefault();
      event.currentTarget.blur();

      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }
  };

  return (
    <Container>
      <form
        className="flex items-end w-full gap-4 py-3"
        onSubmit={handleSubmit}
      >
        <ReactTextareaAutosize
          className="flex-1 resize-none py-4 px-8 rounded-[32px] bg-white outline-none drop-shadow-2xl"
          minRows={1}
          maxRows={5}
          placeholder="Write something"
          onKeyDown={handleKeyPressEnter}
          onKeyUp={handleKeyPressEnter}
          ref={textareaRef}
          name="message"
        />
        <button
          className="h-14 w-14 flex items-center justify-center bg-primaryBlue hover:bg-primaryBlue/90 text-white rounded-full font-semibold"
          type="submit"
          ref={buttonRef}
        >
          <SendIcon color="white" height={28} width={28} />
        </button>
      </form>
    </Container>
  );
};

export default ChatField;
