import { Typewriter } from 'react-simple-typewriter'
import "@fontsource/roboto"

export default function Title() {
    return (
        <div className="flex items-center flex-col select-none">
            <h1 className='text-2xl font-bold'>
                Hey there! I'm Victor Hugo.
            </h1>
            <span>
                I'm a
                <span className='font-semibold text-violet-500'>
                    <Typewriter
                        words={[' Fullstack Developer.', ' Network Administrator.', ' Linux Superuser.']}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </span>
        </div>
    )
}
