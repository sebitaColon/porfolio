'use client'
import React, { useEffect, useRef } from 'react';
import ovni from '../assets/ovni.svg';
import Image from 'next/image';

export default function Nav() {
    const ovniRef = useRef<HTMLDivElement>(null);
    const sections = ['home', 'projects', 'skills', 'contact'];
    useEffect(() => {
        window.scrollTo(0, 0);
        const sectionElements = sections
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        const handleScroll = () => {
            const scrollY = window.scrollY + 20;
            if (!sectionElements.length) return;
            // Antes de la primera sección -> home
            if (scrollY < sectionElements[0].offsetTop) {
                if (ovniRef.current) ovniRef.current.style.transform = `translateX(0px)`;
                return;
            }
            // OVNI sigue scroll entre secciones
            for (let i = 0; i < sectionElements.length - 1; i++) {
                const current = sectionElements[i];
                const next = sectionElements[i + 1];

                if (scrollY >= current.offsetTop && scrollY < next.offsetTop) {
                    const progress = (scrollY - current.offsetTop) / (next.offsetTop - current.offsetTop);
                    const startX = i * 112;
                    const endX = (i + 1) * 112;
                    if (ovniRef.current) {
                        ovniRef.current.style.transform = `translateX(${startX + (endX - startX) * progress}px)`;
                    }
                    return;
                }
            }
            // Después de la última sección
            if (scrollY >= sectionElements[sectionElements.length - 1].offsetTop) {
                if (ovniRef.current) {
                    ovniRef.current.style.transform = `${(sectionElements.length - 1) * 112}px`;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (id: string) => {
        const target = document.getElementById(id);
        if (!target) return;
        window.scrollTo({
            top: target.offsetTop - 20,
            behavior: 'smooth',
        });
    };

    return (
        <nav className="max-w-[1024px] h-20 top-0 w-full flex justify-center items-center z-50">
            <div className='fixed max-w-[800px] w-full mt-10 flex items-center justify-center bg-black/50 rounded-2xl'>
               
                <div className="mx-auto h-20 flex relative items-center justify-center">
                    <div className="inline-flex mx-auto flex-wrap items-center justify-center p-4 ">
                        {/* OVNI */}
                        <div
                            ref={ovniRef}
                            className="top-2 left-6 absolute transition-transform duration-0"
                            style={{ transform: 'translateX(0px)' }}
                        >
                            <div className="relative w-12 h-12">
                                <Image
                                    src={ovni}
                                    className="h-10 relative z-10 -rotate-12"
                                    alt="Logo OVNI"
                                />
                                <div className="absolute rotate-180 top-1/2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[40px] border-r-[40px] border-t-[40px] border-transparent border-t-blue-400 opacity-60 blur-md" />
                            </div>
                        </div>
                        {/* Links */}
                        <div className="hidden w-full md:flex md:w-auto" id="navbar">
                            <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-6 font-medium">
                                {sections.map((link) => (
                                    <li key={link}>
                                        <a
                                            href={`#${link}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleClick(link);
                                            }}
                                            className="block py-2 px-3 rounded-sm text-white hover:text-blue-400 transition-colors"
                                        >
                                            {link.charAt(0).toUpperCase() + link.slice(1)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
