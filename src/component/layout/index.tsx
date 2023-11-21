import { ReactNode } from "react";
import Header from "./header";

interface PropsType {
  children: ReactNode;
}

const Layout = ({ children }: PropsType) => {
  return (
    <div>
      <Header />
      <main className="bg-white">{children}</main>
    </div>
  );
};

export default Layout;
