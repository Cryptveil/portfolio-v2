/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            }
        },
        animation: {
            'marquee': 'marquee 25s linear infinite',
        },
        colors: {
            'primary': '#e5e7eb',
            'secondary': '#000000',
            'accent': '#823ae9',
            'background': '#1D1D1F',
            'black': '#050505',
            'white': '#e5e7eb'
        },
    },
    plugins: [],
}
