import { useState } from 'react'
import { motion } from "framer-motion"

export default function Navbar() {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className=''>
            <h1>this is a navbar trust me</h1>
        </nav>
    )
}
