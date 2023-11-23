import { ReactNode } from "react";
import Header from "./header";

interface PropsType {
  children: ReactNode;
}

const Layout = ({ children }: PropsType) => {
  return (
    <div className="max-h-screen h-screen flex flex-col">
      <Header />
      <main className="bg-white flex-1 overflow-auto">{children}</main>
      <div className="flex items-center w-full">
        <textarea className="resize-none flex-1"></textarea>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Layout;
