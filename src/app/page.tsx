import AboutMe from "./Components/AboutMe";
import Layout from "./Components/Layout";
import PcArmada from "./Components/PcArmada";
import Proyects from "./Components/Proyects";
export default function Home() {
  return (
    <Layout>        
        <div className="h-auto lg:max-w-[1024px] w-full z-10">
          <div className="w-full h-screen min-h-[750px] grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2">
            <div className=" md:col-span-2 pt-2 lg:row-span-2">
              <PcArmada />
            </div>
            <div className="w-full hidden lg:block h-full col-span-2 md:col-span-1 lg:row-span-2">
              <AboutMe />
            </div>
          </div>
          <Proyects/>
        </div>
    </Layout>
  );
}
