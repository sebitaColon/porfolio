import { NextUIProvider } from "@nextui-org/react";
import "../globals.css"
import StarsBackground from "./StarsBackground";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <NextUIProvider className="w-full flex flex-col items-center">
      <div className="flex flex-col w-full min-h-screen items-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-blue-950 -z-10" />
        <StarsBackground/>
        <main className="flex-1 flex flex-col w-full min-h-screen items-center text-white">
          {children}
        </main>
        {/*aca el footer*/}
      </div>
    </NextUIProvider>
  );
};

export default Layout;
