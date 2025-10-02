import AboutMe from "./Components/AboutMe";
import Layout from "./Components/Layout";
import Nav from "./Components/Nav";
import PcArmada from "./Components/PcArmada";
import ComponentTitle from "./Components/Proyects";
import Skills from "./Components/Skills";
import CardProyect from "./Components/UI/CardProyect";
export default function Home() {
  return (
    <Layout>
      <Nav />
      <div className="h-auto lg:max-w-[1024px] w-full z-10">
        <div className="w-full h-auto min-h-[750px] grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2">
          <div className=" md:col-span-2 pt-2 lg:row-span-2">
            <PcArmada />
          </div>
          <div className="w-full hidden lg:block h-full col-span-2 md:col-span-1 lg:row-span-2">
            <AboutMe />
          </div>
        </div>
        <div className='w-full h-auto flex justify-center items-center lg:hidden'>
          <AboutMe />
        </div>
        <ComponentTitle TextTitle='projects' />
        <CardProyect />
        <ComponentTitle TextTitle='skills' />
        <Skills />
      </div>
    </Layout>
  );
}
