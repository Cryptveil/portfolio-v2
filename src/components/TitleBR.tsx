import { Typewriter } from 'react-simple-typewriter'

export default function Title() {
    return (
        <div className="flex items-center flex-col select-none">
            <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>
                Olá! Sou Victor Hugo.
            </h1>
            <span className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
                Sou um
                <span className='font-semibold text-accent'>
                    <Typewriter
                        words={[' Desenvolvedor Fullstack.', ' Administrador de Redes.', ' Superuser de Linux.']}
                        loop={0}
                        // cursor
                        // cursorStyle='_'
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </span>
        </div>
    )
}

