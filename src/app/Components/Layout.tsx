import "../globals.css"
import StarsBackground from "./StarsBackground";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id='home' className="flex flex-col w-full min-h-screen items-center relative">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900 to-blue-950 -z-10" />
      <StarsBackground />
      <main className="flex-1 flex flex-col w-full min-h-screen items-center text-white">
        {children}
      </main>
      <div className="w-full h-16 flex items-center justify-center text-white font-bold backdrop-blur-2xl bg-black mt-5">
        <h1>© 2025  Made with ❤ by Sebastian Chacon</h1>
      </div>
    </div>
  );
};

export default Layout;
