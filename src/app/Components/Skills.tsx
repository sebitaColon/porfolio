import Image from 'next/image'
import github from '../assets/github.svg'
import ts from '../assets/ts.svg'
import css from '../assets/css.svg'
import html from '../assets/html.svg'
import js from '../assets/js.svg'
import postgresql from '../assets/postgresql.svg'
import react from '../assets/react.svg'
import tailwindcss from '../assets/tailwindcss.svg'
import prisma from "../assets/prisma.svg"
import nextJS from '../assets/nextjs.svg'
import nodeJS from '../assets/nodeJS.svg'
import cloudinary from '../assets/cloudinary.svg'

type Skill = {
    name: string;
    icon: any;
};
type SkillCategory = {
    title: string;
    items: Skill[];
};

const skills: SkillCategory[] = [
    {
        title: "Lenguajes de Programación",
        items: [
            { name: "JavaScript", icon: js },
            { name: "TypeScript", icon: ts },
        ],
    },
    {
        title: "Frontend",
        items: [
            { name: "HTML", icon: html },
            { name: "CSS", icon: css },
            { name: "TailwindCSS", icon: tailwindcss },
            { name: "ReactJS", icon: react },
        ],
    },
    {
        title: "Backend",
        items: [
            { name: "NodeJS", icon: nodeJS },
            { name: "PostgreSQL", icon: postgresql },
            { name: "Prisma", icon: prisma },
        ],
    },
    {
        title: "Frameworks / Fullstack",
        items: [{ name: "NextJS", icon: nextJS }],
    },
    {
        title: "Other",
        items: [
            { name: "GitHub", icon: github },
            { name: "Cloudinary", icon: cloudinary },
        ],
    },
];

export default function Skills() {
    return (
        <div className="w-full p-6 sm:p-10 text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">

                {/* Columna izquierda - Sidebar de categorías */}
                <div className="col-span-1 flex flex-col gap-4">
                    {skills.map((category, idx) => (
                        <div key={idx} className="bg-black/50 hover:border-2 hover:border-sky-400 hover:shadow-lg transition-all md:h-50 backdrop-blur-2xl p-6 rounded-xl">
                            <h2 className="text-lg tracking-wide font-semibold text-sky-400">
                                {category.title}
                            </h2>
                            <ul className="list-disc list-inside text-gray-200 marker:text-sky-500 mt-2 space-y-1">
                                {category.items.map((skill, i) => (
                                    <div key={i} className='w-full justify-between flex'>
                                        <li>{skill.name}</li>
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            width={20}
                                            height={20}
                                            className="md:hidden"
                                        />
                                    </div>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Columna derecha - Íconos grandes agrupados */}
                <div className="hidden md:flex col-span-1 md:col-span-3 flex-col gap-4">
                    {skills.map((category, idx) => (
                        <div
                            key={idx}
                            className="bg-black/50 md:h-50 hover:border-2 hover:border-sky-400 hover:shadow-lg transition-all  backdrop-blur-2xl flex justify-center items-center rounded-2xl shadow-md p-4"
                        >
                            <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {category.items.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="w-full relative flex flex-col items-center justify-center p-4 rounded-xl transition group"
                                    >
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            width={80}
                                            height={80}
                                            className="sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px]"
                                        />
                                        <span
                                            className="absolute -top-12 bg-sky-400/90 text-white text-sm px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
