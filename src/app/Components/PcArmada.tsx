import React from "react";
import Monitor from "./UI/Monitor";
import Teclado from "./UI/Teclado";
import Image from "next/image";
import github from '../assets/github.svg'
import ts from '../assets/ts.svg'
import css from '../assets/css.svg'
import html from '../assets/html.svg'
import js from '../assets/js.svg'
import postgresql from '../assets/postgresql.svg'
import react from '../assets/react.svg'
import tailwindcss from '../assets/tailwindcss.svg'
import Mouse from "./UI/Mouse";
import mousepad from "../assets/fondoMousePad.jpeg"
import prisma from "../assets/prisma.svg"

export default function PcArmada() {
  return (
    <div className="w-full h-[700px] relative overflow-hidden lg:overflow-visible ">
      <div className="w-auto h-full flex absolute top-[16.6rem] left-32 sm:left-72 justify-center items-center md:top-52 md:left-[45%] lg:left-72">
        <div className="w-[400px] h-5 bg-[#8B4513] relative" style={{ transform: "skewY(-20deg)" }}>
          <Image src={mousepad} alt="icon" className="w-90 border-2 border-white h-54 absolute z-10 bottom-8 -left-24" style={{ transform: "skewX(45deg)" }}/>
          <h1 className='absolute w-90 h-54 text-white font-bold flex gap-2 items-end pb-5 p-2 justify-center z-50 bottom-18 -left-6' style={{ transform: "skewX(45deg)" }}>MY SKILLS</h1>
          <div className='absolute w-90 h-54 flex gap-2 items-end pb-5 p-2 justify-center z-50 bottom-8 -left-24' style={{ transform: "skewX(45deg)" }} >
            <Image src={github} alt="icon" width={25}/>
            <Image src={ts} alt="icon" width={25}/>
            <Image src={css} alt="icon" width={25}/>
            <Image src={html} alt="icon" width={25}/>
            <Image src={js} alt="icon" width={25}/>
            <Image src={postgresql} alt="icon" width={25}/>
            <Image src={react} alt="icon" width={25}/>
            <Image src={tailwindcss} alt="icon" width={25}/>
            <Image src={prisma} alt="icon" width={25}/>
          </div>
          <div className="h-[300px] w-[400px] bg-[#a15824] bottom-full absolute" style={{ transformOrigin: "bottom", transform: "skewX(45deg)" }} ></div>
          <div className="h-full w-[300px] bg-[#66320e] -left-[300px] top-0 absolute" style={{ transformOrigin: "right", transform: "skewY(45deg)" }} ></div>
        </div>
        <div className="w-auto h-auto flex -left-36 md:-left-42 -top-72 absolute ">
          <Monitor />
        </div>
        <div className="w-auto h-auto flex -left-8 top-74 justify-start  items-start absolute ">
          <Teclado />
        </div>
        <div className="w-auto h-auto flex left-44 top-54 justify-start  items-start absolute ">
            <Mouse />
        </div>
      </div>
    </div>
  );
}
