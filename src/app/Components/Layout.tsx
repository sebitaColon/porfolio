import { NextUIProvider } from "@nextui-org/react";
import Nav from "./Nav";
import "../globals.css"
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <NextUIProvider className="w-full flex flex-col items-center">
      <div className="bg-blue-500 flex flex-col w-full min-h-screen items-center">
        <main className="flex-1 flex flex-col w-full min-h-screen items-center">{children}</main>
        {/*aca el footer*/}
      </div>
    </NextUIProvider>
  );
};

export default Layout;
