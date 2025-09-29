import React from 'react'
import "../../style/setUp.css"
import Image from 'next/image'
import FondoWindows from "../../assets/fondos-windows-2.jpg"
import iconGit from '../../assets/github.svg'

export default function Monitor() {
    return (
        <div className='w-full h-auto relative pt-14 flex justify-center items-center'>
            <div className='w-auto h-auto relative p-5 z-20'>
                {/*monitor */}
                <div className='monitor w-[250px] h-80 relative z-10'>
                    <div className='border-2 border-slate-500 z-50 w-full h-full absolute'></div>
                    <div className='w-full h-full md:-rotate-90 flex justify-center items-start absolute z-10 md:items-center md:justify-center md:w-[120%] md:h-[50%] md:-left-[35%] md:top-[25%]'>
                        <div className="w-11/12 py-1 px-2 mt-[25%] rounded-full h-auto bg-white">
                            <h1 className="text-black text-tiny maquina text-[0.60rem] md:text-sm">
                                Hello, <span className="text-blue-700">Welcome</span> to my portfolio
                            </h1>
                        </div>
                    </div>
                    <Image src={FondoWindows} alt='fondoWindow' className='w-full h-full absolute'></Image>
                    <div className='w-full h-full absolute flex items-end justify-end'>
                        <div className='w-full h-5 md:w-5 md:h-full bg-blue-900 flex pl-2 items-center md:justify-center md:items-end md:pb-2 md:pl-0'>
                            <div className="grid grid-cols-2 grid-rows-2 h-3 w-3 gap-[1px] rounded-md">
                                <span className="bg-white"></span>
                                <span className="bg-white"></span>
                                <span className="bg-white"></span>
                                <span className="bg-white"></span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-3 absolute -top-3 bg-slate-500 transition-all delay-500 md:opacity-0 ' style={{ transformOrigin: 'bottom', transform: 'skewX(45deg)' }}></div>
                    <div className='border-monitor h-full w-3 bg-slate-700 md:bg-slate-500 -left-3 top-0 absolute'></div>
                    <div className='w-full h-3 absolute -bottom-3 bg-slate-700 transition-all delay-500 opacity-0 md:opacity-100' style={{ transformOrigin: 'top', transform: 'skewX(-45deg)' }}></div>
                </div>
                {/*pie */}
                <div className='w-6 h-[60%] absolute top-[50%] left-[50%] soporte-monitor'>
                    <div className='relative w-full h-full bg-slate-500'>
                        <div className='h-full w-3 bg-slate-700 -left-3 -top-[6px] absolute z-10' style={{ transformOrigin: 'rigth', transform: 'skewY(45deg)' }}></div>
                        <div className='bg-slate-500 h-5 w-[500%] -left-[200%] absolute top-full'>
                            <div className='w-full h-3 absolute -top-3 bg-slate-500' style={{ transformOrigin: 'bottom', transform: 'skewX(45deg)' }}></div>
                            <div className='h-full w-3 bg-slate-700 -left-3 -top-[6px] absolute' style={{ transformOrigin: 'rigth', transform: 'skewY(45deg)' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
