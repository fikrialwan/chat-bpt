import { ReactNode } from "react";
import Header from "./header";

interface PropsType {
  children: ReactNode;
}

const Layout = ({ children }: PropsType) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="bg-white flex-1">{children}</main>
    </div>
  );
};

export default Layout;
