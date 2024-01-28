import { ReactNode } from "react";
import profile from "../../assets/chat-bpt-profile.png";

interface MessageProps {
  children: ReactNode;
}

const Message = ({
  children,
  isUser,
  isText = true,
}: MessageProps & { isUser: boolean; isText?: boolean }) => {
  return isUser ? (
    <MessageUser>{children}</MessageUser>
  ) : (
    <MessageAI isText={isText}>{children}</MessageAI>
  );
};

const MessageUser = ({ children }: MessageProps) => {
  return (
    <p className="px-6 py-3 rounded-3xl rounded-tr-none bg-primaryBlue text-white self-end whitespace-pre-line">
      {children}
    </p>
  );
};

const MessageAI = ({
  children,
  isText,
}: MessageProps & { isText?: boolean }) => {
  return (
    <div className="flex flex-row items-end gap-4">
      <img
        src={profile}
        className="w-12 h-12 rounded-full border-2 outline-white"
      />
      {isText ? (
        <p className="px-6 py-3 rounded-3xl rounded-bl-none bg-primaryGray whitespace-pre-line">
          {children}
        </p>
      ) : (
        <div className="px-6 py-3 rounded-3xl rounded-bl-none bg-primaryGray whitespace-pre-line">
          {children}
        </div>
      )}
    </div>
  );
};

export default Message;
