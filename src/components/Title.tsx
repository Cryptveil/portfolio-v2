import { Typewriter } from 'react-simple-typewriter'

export default function Title() {
    return (
        <h1>
            <span>
                <Typewriter
                    words={[' Eat', ' Sleep', ' Code', ' Repeat!']}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </span>
        </h1>
    )
}
