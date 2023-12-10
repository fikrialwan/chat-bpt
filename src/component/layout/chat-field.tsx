import ReactTextareaAutosize from "react-textarea-autosize";
import SendIcon from "../icons/send";

const ChatField = () => {
  return (
    <div className="flex items-end w-full gap-4 px-6 py-3">
      <ReactTextareaAutosize
        className="flex-1 resize-none py-4 px-8 rounded-[32px] bg-white outline-none drop-shadow-2xl"
        minRows={1}
        maxRows={5}
        placeholder="Write something"
      />
      <button className="py-4 px-4 bg-primaryBlue hover:bg-primaryBlue/90 text-white rounded-full font-semibold">
        <SendIcon color="white" />
      </button>
    </div>
  );
};

export default ChatField;
