import React from 'react'

export default function AboutMe() {
  return (
    <div className='w-full h-auto flex flex-col ml-4 rounded-2xl justify-center items-center mt-10 pt-5 '>
      <div className="w-[250px] h-[250px] border-2 border-blue-400 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.7)] animate-pulse"></div>
      <div className='w-full h-auto px-2 py-7 flex flex-col justify-center items-center'>
        <h1 className="text-white font-bold mb-1 text-xl drop-shadow-lg">Sebastián Chacón</h1>
        <span className="w-32 h-1 bg-sky-400 mb-5 rounded-full drop-shadow-md"></span>
        <p className='font-bold text-center max-w-72  text-white'>Hi, I'am Full Stack web developer focused on creating intuitive and functional interfaces. I specialize in Front-end development but also have experience in Back-end.</p>
      </div>
    </div>
  )
}
