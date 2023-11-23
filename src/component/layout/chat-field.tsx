import ReactTextareaAutosize from "react-textarea-autosize";

const ChatField = () => {
  return (
    <div className="flex items-end w-full gap-4 px-6 py-3">
      <ReactTextareaAutosize
        className="flex-1 resize-none py-3 px-6 rounded-xl bg-gray-100 outline-none"
        minRows={1}
        maxRows={5}
        placeholder="Write something"
      />
      <button className="py-3 px-6 bg-primaryBlue hover:bg-primaryBlue/90 text-white rounded-xl font-semibold">
        Send
      </button>
    </div>
  );
};

export default ChatField;
