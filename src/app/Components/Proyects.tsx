"use client"
import React, { useEffect } from 'react'
import AboutMe from './AboutMe'
import "../style/title.css"

type Props = {
  TextTitle: string;
}

export default function ComponentTitle({ TextTitle }: Props) {

  useEffect(() => {
    const texts = document.querySelectorAll<HTMLElement>('.title-proyects');
    texts.forEach((text) => {
      text.innerHTML = text.innerText
        .split('')
        .map(
          (letter, i) =>
            `<span style="transition-delay:${i * 40}ms; filter:hue-rotate(${i * 30}deg);">${letter}</span>`
        )
        .join('');
    });
  }, []);

  return (
    <div className='w-full h-auto'>
      <div id={`${TextTitle}`} className='divHover scroll-mt-20 w-full flex flex-col h-auto justify-center items-center relative'>
        <h1 className='title-proyects text-[2.5rem] md:text-[4rem] lg:text-[5rem]'>{TextTitle}</h1>
      </div>
    </div>
  )
}
