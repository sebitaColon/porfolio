"use client"
import React,{useEffect} from 'react'
import AboutMe from './AboutMe'
import "../style/title.css"
import CardProyect from './UI/CardProyect';


export default function Proyects() {
  
  useEffect(() => {
    const text = document.querySelector<HTMLElement>('.title-proyects');
    if (text) {
        text.innerHTML = text.innerText.split('').map((letter, i) => 
            `<span style="transition-delay:${i * 40}ms; filter:hue-rotate(${i * 30}deg);">${letter}</span>`
        ).join('');
    }
}, []);

  return (
    <div className='w-full h-auto min-h-screen'>
        <div className='w-full h-auto flex justify-center items-center lg:hidden'>
            <AboutMe/>
        </div>
        <div id='projects' className='divHover scroll-mt-20 w-full flex flex-col h-auto justify-center items-center relative'>
          <h1 className='title-proyects text-[2.5rem] md:text-[4rem] lg:text-[5rem]'>PROYECTS</h1>
        </div>
        <CardProyect/>
    </div>
  )
}
