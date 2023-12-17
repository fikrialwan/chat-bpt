import profile from "../../assets/chat-bpt-profile.jpg";

interface MessageProps {
  children: string;
}

const Message = ({ children, isUser }: MessageProps & { isUser: boolean }) => {
  return isUser ? (
    <MessageUser>{children}</MessageUser>
  ) : (
    <MessageAI>{children}</MessageAI>
  );
};

const MessageUser = ({ children }: MessageProps) => {
  return (
    <p className="px-6 py-3 rounded-3xl rounded-tr-none bg-primaryBlue text-white self-end whitespace-pre-line">
      {children}
    </p>
  );
};

const MessageAI = ({ children }: MessageProps) => {
  return (
    <div className="flex flex-row items-end gap-4">
      <img
        src={profile}
        className="w-12 h-12 rounded-full border-2 outline-white"
      />
      <p className="px-6 py-3 rounded-3xl rounded-bl-none bg-primaryGray whitespace-pre-line">
        {children}
      </p>
    </div>
  );
};

export default Message;
