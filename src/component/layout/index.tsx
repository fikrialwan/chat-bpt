import { ReactNode } from "react";
import Header from "./header";
import ChatField from "./chat-field";

interface PropsType {
  children: ReactNode;
}

const Layout = ({ children }: PropsType) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="bg-white flex-1 overflow-auto">{children}</main>
      <ChatField />
    </div>
  );
};

export default Layout;
