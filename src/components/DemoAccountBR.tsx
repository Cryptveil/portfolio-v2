import { useState } from "react";

type DemoAccountType = {
    username: string,
    password: string
}

type DemoAccountProps = {
    demoAccount: DemoAccountType
}

const DemoAccount = ({ demoAccount }: DemoAccountProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="inline-flex w-full justify-center rounded-lg border transition duration-300 font-semibold text-lg border-white px-4 py-2 text-white hover:bg-primary hover:text-black shadow-sm focus:bg-primary focus:text-black focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                >
                    Conta demonstra&ccedil;&atilde;o
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            <div
                className={`absolute w-full right-0 shadow-sm shadow-accent z-10 mt-2 origin-top-right rounded-md bg-background text-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none ${isMenuOpen ? "" : "hidden"
                    }`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
            >
                <div className="py-1" role="none">
                    <p
                        className="text-white block px-4 py-2 text-md font-bold"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-2"
                    >
                        Usu&aacute;rio: {demoAccount.username}
                    </p>
                    <p
                        className="text-white block px-4 py-2 text-md font-bold"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-2"
                    >
                        Senha: {demoAccount.password}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DemoAccount;

