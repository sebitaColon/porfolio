import React from 'react'
import proyectoSkyImg from '../../assets/proyectoSky.png'
import proyectoDespensaImg from '../../assets/proyectoDespensa.png'
import Image from 'next/image';
import github from '../../assets/github.svg'
import ts from '../../assets/ts.svg'
import postgresql from '../../assets/postgresql.svg'
import react from '../../assets/react.svg'
import nextjs from '../../assets/nextjs.svg'
import tailwindcss from '../../assets/tailwindcss.svg'
import prisma from "../../assets/prisma.svg"

export default function CardProyect() {
    const projects = [
        {
            title: "Skylight Lending",
            description: "Proyecto realizado en una pasantia en la empresa de crombie",
            demo: "https://skylightlending-landing-next.vercel.app",
            github: "https://github.com/Alejandro98123/skylightlending-landing-Next",
            image: proyectoSkyImg,
            techStack: [
                { name: "GitHub", icon: github },
                { name: "Next JS", icon: nextjs },
                { name: "Prisma", icon: prisma },
                { name: "TypeScript", icon: ts },
                { name: "PostgreSQL", icon: postgresql },
                { name: "TailwindCSS", icon: tailwindcss },
                { name: "React", icon: react },
            ],
        },
        {
            title: "Despensa",
            description: "Mini app web de despensa con CRUD de productos y cálculo automático de precios.",
            demo: "https://despensa-sebitacolon-sebitas-projects-44a00b10.vercel.app",
            github: "https://github.com/sebitas-projects/despensa",
            image: proyectoDespensaImg,
            techStack: [
                { name: "GitHub", icon: github },
                { name: "Next JS", icon: nextjs },
                { name: "Prisma", icon: prisma },
                { name: "TypeScript", icon: ts },
                { name: "PostgreSQL", icon: postgresql },
                { name: "TailwindCSS", icon: tailwindcss },
                { name: "React", icon: react },
            ],
        },
    ];
    return (
        <div className="w-full h-auto p-10 flex flex-col gap-6">
            {projects.map((p, i) => (
                <div key={i} className="bg-black/50 backdrop-blur-2xl p-4 w-full h-auto rounded-xl shadow-lg">
                    <div className='w-full flex justify-between'>
                        <h1 className='lg:text-3xl font-bold'>{p.title}</h1>
                        <a href={p.github} target="_blank" className='w-auto h-auto text-black font-bold py-2 px-5 rounded-xl bg-white'>Code</a>
                    </div>
                    <p className="text-sm my-1 text-gray-400 mb-3">{p.description}</p>
                    <div className="flex flex-wrap gap-3 mb-4">
                        {p.techStack.map((tech, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-2 bg-blue-600/20 text-blue-300 px-3 py-2 rounded-full border border-blue-500"
                            >
                                <Image src={tech.icon} alt={tech.name} className="w-3 h-3 md:w-5 md:h-5" />
                                <span className="text-xs md:text-sm">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                    <Image src={p.image} alt={p.title} className="w-full rounded-lg mb-3" />
                    <a href={p.demo} target="_blank" className='w-auto h-auto block text-center text-black font-bold py-2 px-5 rounded-xl bg-white'>Live Demo</a>
                </div>
            ))}
        </div>
    )
}
