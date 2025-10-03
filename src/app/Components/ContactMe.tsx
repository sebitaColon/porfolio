'use client'
import React from 'react'
import copy from '../assets/copy.svg'
import Image from 'next/image'
import github from '../assets/github.svg'
import linkedIn from '../assets/linkedIn.svg'
import gmail from '../assets/gmail.svg'



export default function ContactMe() {
    return (
        <div id="contact" className="w-full h-auto p-10 flex justify-center items-center">
            <div className="w-full max-w-3xl h-full bg-black/50 backdrop-blur-3xl border-2 border-sky-400 rounded-2xl p-10 flex flex-col justify-center gap-6">
                <h2 className="text-4xl font-bold text-white">
                    Contact <span className="text-sky-400">Me!</span>
                </h2>
                <p className="text-white/70">¡Estoy disponible para proyectos! Envíame un mensaje o conéctate conmigo:</p>
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-3 rounded-lg bg-black/70 border border-sky-400 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-3 rounded-lg bg-black/70 border border-sky-400 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="p-3 rounded-lg bg-black/70 border border-sky-400 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-sky-400 text-black font-bold py-3 rounded-lg hover:bg-sky-500 transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
                <div className="flex-col flex md:flex-row gap-6 mt-6 justify-between items-center">
                    <div className='flex gap-6'>
                        <a href="https://github.com/sebitaColon" target="_blank" className="text-white items-center flex justify-center  hover:text-sky-400 transition-colors">
                            <Image src={github} width={40} height={40} alt='github'></Image>
                        </a>

                        <a href="https://www.linkedin.com/in/sebastian-chacon-a786a1372/" target="_blank" className="text-white items-center flex justify-center hover:text-sky-400 transition-colors">
                            <Image src={linkedIn} width={40} height={40} alt='linkedin'></Image>

                        </a>
                        <a href="sebita03082003@gmail.com" className="text-white items-center flex justify-center hover:text-sky-400 transition-colors">
                            <Image src={gmail} width={40} height={40} alt='gmail'></Image>
                        </a>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 md:w-90 items-center justify-center">
                        <input
                            type="email"
                            value="sebita03082003@gmail.com"
                            readOnly
                            className="p-3 rounded-lg bg-black/70 border border-sky-400 text-white/70 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400 flex-1"
                        />
                        <button
                            onClick={() => navigator.clipboard.writeText("sebita03082003@gmail.com")}
                            className="bg-sky-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-sky-500 transition-all duration-300"
                        >
                            <Image src={copy} width={25} height={25} alt='copy'></Image>
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )
}
