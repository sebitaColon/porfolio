import React from 'react'

export default function AboutMe() {
  return (
    <div className='w-full h-auto flex flex-col justify-start items-center pt-10 '>
        <div className='w-[250px] h-[250px] border-1 border-black bg-white rounded-full'></div>
        <div className='w-full h-auto px-2 py-7 flex flex-col justify-center items-center'>
          <h1 className='text-white font-bold mb-1 text-xl'>Sebastián Chacón</h1>
          <span className='w-32 h-1 bg-white mb-5 rounded-full'></span>
          <p className='font-bold max-w-72 text-white'>Hi, I'am Full Stack web developer focused on creating intuitive and functional interfaces. I specialize in Front-end development but also have experience in Back-end.</p> 
        </div>
    </div>
  )
}
