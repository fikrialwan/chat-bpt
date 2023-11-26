import { ReactNode, useEffect } from "react";
import Header from "./header";
import ChatField from "./chat-field";

interface PropsType {
  children: ReactNode;
}

const updateSizeViewport = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

const Layout = ({ children }: PropsType) => {
  useEffect(() => {
    window.addEventListener("resize", updateSizeViewport);
    return window.removeEventListener("resize", updateSizeViewport);
  });

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="bg-white flex-1 overflow-auto">{children}</main>
      <ChatField />
    </div>
  );
};

export default Layout;
