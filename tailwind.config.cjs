/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        colors: {
            'primary': '#a38fff',
            'secondary': '#060024',
            'accent': '#823ae9',
            'background': '#050505',
            'light-primary': '#a38fff',
            'light-secondary': '#e2ccff',
            'light-accent': '#7020df',
            'light-background': '#fafafa',
            'black': '#050505',
            'white': '#e5e7eb'
        },
        extend: {},
    },
    plugins: [],
}
