import { useState } from 'react'
import { motion } from "framer-motion"
import { useMediaQuery } from '../utils/useMediaQuery'

export default function Navbar() {
    const [toggle, setToggle] = useState(false)
    const matches = useMediaQuery("(min-width:1280px)")

    return (
        <nav className='relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32'>
            <svg
                className='absolute bottom-0 left-1/2 -translate-x-1/2'
                width="250"
                height={4}
                viewBox='0 0 250 4'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M2 2L428 2'
                    stroke='#282828'
                    strokeLinecap='round'
                    strokeWidth={2} />
            </svg>

            <div></div>

            <h1 className='font-bold text-lg'>
                <a href="#">navbar!</a>
            </h1>

            {matches && (
                <div className='flex gap-12'>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Projects</a>
                </div>
            )}

            {!matches && (
                <div className='space-y-1 cursor-pointer' onClick={() => setToggle((prevToggle) => !prevToggle)}>
                    <span className='block h-0.5 w-8 bg-black'></span>
                    <span className='block h-0.5 w-6 bg-black'></span>
                    <span className='block h-0.5 w-4 bg-black'></span>
                </div>
            )}
        </nav>
    )
}
