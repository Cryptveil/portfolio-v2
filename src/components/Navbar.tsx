import { useState } from 'react'
import { motion } from "framer-motion"
import { useMediaQuery } from '../utils/useMediaQuery'

export default function Navbar() {
    const [toggle, setToggle] = useState(false)
    const matches = useMediaQuery("(min-width:1280px)")

    return (
        <nav className='fixed top-0 bg-background border-b border-secondary bg-opacity-70 backdrop-blur select-none w-full flex justify-between items-center pt-6 pb-3 font-medium z-50'>
            <a href="#">
                <h1 className='font-bold text-lg pl-4 lg:pl-8 pb-3'>
                    Victor Buntrok
                </h1>
            </a>
            {matches && (
                <div className='flex gap-12 pr-8 pb-3 font-bold'>
                    <a href="/" className='group hover:text-accent transition duration-300'>
                        🇧🇷  Portugu&ecirc;s
                        <span className="block max-w-0 group-hover:max-w-full rounded-full transition-all duration-200 h-0.5 bg-accent" />
                    </a>
                    <a href="#about" className='group hover:text-accent transition duration-300'>
                        About
                        <span className="block max-w-0 group-hover:max-w-full rounded-full transition-all duration-200 h-0.5 bg-accent" />
                    </a>
                    <a href="#skills" className='group hover:text-accent transition duration-300'>
                        Skills
                        <span className="block max-w-0 group-hover:max-w-full rounded-full transition-all duration-200 h-0.5 bg-accent" />
                    </a>
                    <a href="#projects" className='group hover:text-accent transition duration-300'>
                        Projects
                        <span className="block max-w-0 group-hover:max-w-full rounded-full transition-all duration-200 h-0.5 bg-accent" />
                    </a>
                </div>
            )}

            {!matches && (
                <div className='space-y-1.5 cursor-pointer z-50 pr-4 pb-4' onClick={() => setToggle((prevToggle) => !prevToggle)}>
                    <motion.span
                        animate={{
                            rotateZ: toggle ? 45 : 0,
                            y: toggle ? 8 : 0,
                        }}
                        className='block h-0.5 w-6 bg-white'
                    />
                    <motion.span
                        animate={{ width: toggle ? 0 : 24 }}
                        className='block h-0.5 w-6 bg-white' />
                    <motion.span
                        animate={{
                            rotateZ: toggle ? -45 : 0,
                            y: toggle ? -8 : 0,
                        }}
                        className='block h-0.5 w-6 bg-white'
                    />
                </div>
            )}
            {toggle && !matches && (
                <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 25 }}
                    className='fixed bg-background bottom-0 top-0 w-full h-screen items-center justify-center flex z-30'>
                    <div className='flex flex-col gap-24 text-lg font-semibold'>
                        <a href="/" className='hover:text-accent' onClick={() => setToggle(false)}>🇧🇷 Portugu&ecirc;s</a>
                        <a href="#about" className='hover:text-accent' onClick={() => setToggle(false)}>About</a>
                        <a href="#skills" className='hover:text-accent' onClick={() => setToggle(false)}>Skills</a>
                        <a href="#projects" className='hover:text-accent' onClick={() => setToggle(false)}>Projects</a>
                    </div>
                </motion.div>
            )}
        </nav>
    )
}
