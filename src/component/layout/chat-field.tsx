import ReactTextareaAutosize from "react-textarea-autosize";
import SendIcon from "../icons/send";
import Container from "../shared/container";

const ChatField = () => {
  return (
    <Container>
      <div className="flex items-end w-full gap-4 py-2">
        <ReactTextareaAutosize
          className="flex-1 resize-none py-4 px-8 rounded-[32px] bg-white outline-none drop-shadow-2xl"
          minRows={1}
          maxRows={5}
          placeholder="Write something"
        />
        <button className="h-14 w-14 flex items-center justify-center bg-primaryBlue hover:bg-primaryBlue/90 text-white rounded-full font-semibold">
          <SendIcon color="white" height={28} width={28} />
        </button>
      </div>
    </Container>
  );
};

export default ChatField;
