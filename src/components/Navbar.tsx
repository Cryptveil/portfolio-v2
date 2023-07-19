import { useState } from 'react'
import { motion } from "framer-motion"
import { useMediaQuery } from '../utils/useMediaQuery'

export default function Navbar() {
    const [toggle, setToggle] = useState(false)
    const matches = useMediaQuery("(min-width:1280px)")

    return (
        <nav className='sticky top-0 bg-black border-b border-gray-800 bg-opacity-70 backdrop-blur select-none w-full flex justify-between items-center pt-12 pb-6 font-medium mb-24'>
            <h1 className='font-bold text-lg pl-4 pb-4'>
                <a href="#">Victor Hugo.</a>
            </h1>

            {matches && (
                <div className='flex gap-12 pr-4 pb-4 font-bold'>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
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
                    className='fixed bg-black bottom-0 top-0 w-full h-screen items-center justify-center flex z-30'>
                    <div className='flex flex-col gap-24 text-lg font-semibold'>
                        <a href="#about" onClick={() => setToggle(false)}>About</a>
                        <a href="#skills" onClick={() => setToggle(false)}>Skills</a>
                        <a href="#projects" onClick={() => setToggle(false)}>Projects</a>
                    </div>
                </motion.div>
            )}
        </nav>
    )
}
