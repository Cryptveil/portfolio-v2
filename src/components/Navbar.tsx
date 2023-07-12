import { useState } from 'react'
import { motion } from "framer-motion"
import { useMediaQuery } from '../utils/useMediaQuery'

export default function Navbar() {
    const [toggle, setToggle] = useState(false)
    const matches = useMediaQuery("(min-width:1280px)")

    return (
        <nav className='relative mx-8 mb-12 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32'>
            <h1 className='font-bold text-lg'>
                <a href="#">Victor Hugo.</a>
            </h1>

            {matches && (
                <div className='flex gap-12'>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Projects</a>
                </div>
            )}

            {!matches && (
                <div className='space-y-1.5 cursor-pointer z-50' onClick={() => setToggle((prevToggle) => !prevToggle)}>
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
                    className='fixed bg-black bottom-0 left-0 w-full h-screen items-center justify-center flex'>
                    <div className='flex flex-col gap-24 text-lg font-semibold'>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Projects</a>
                    </div>
                </motion.div>
            )}
        </nav>
    )
}
