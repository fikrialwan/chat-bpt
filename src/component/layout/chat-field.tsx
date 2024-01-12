import ReactTextareaAutosize from "react-textarea-autosize";
import SendIcon from "../icons/send";
import Container from "../shared/container";
import React from "react";

const ChatField = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit");
  };

  const handleKeyPressEnter = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      console.log("submit");
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
        />
        <button
          className="h-14 w-14 flex items-center justify-center bg-primaryBlue hover:bg-primaryBlue/90 text-white rounded-full font-semibold"
          type="submit"
        >
          <SendIcon color="white" height={28} width={28} />
        </button>
      </form>
    </Container>
  );
};

export default ChatField;
