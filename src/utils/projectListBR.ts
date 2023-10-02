import whisker from "/projects/whisker.png"
import monify from "/projects/monify.png"

const projects = [
    {
        picture: whisker,
        alt: "Foto de um clone do Twitter",
        title: "Whisker",
        description: "Whisker é uma rede social e um clone do Twitter. Foi projetado para ser uma cópia do design e do layout do Twitter, e tem as funcionalidades: Tweets (ou Meow), Likes e Comentários. É necessário estar logado para verificar as funcionalidades.",
        demo: "https://whisker-network.vercel.app/",
        source: "https://github.com/Grellheist/whisker",
        technologies: [
            "TailwindCSS",
            "NextJS",
            "Typescript",
            "Clerk",
            "Prisma",
            "MySQL",
            "RadixUI",
            "Vercel",
            "PlanetScale",
        ],
        account: { username: "demo123", password: "Jj@7TsFk" }
    },
    {
        picture: monify,
        alt: "Um site de finanças pessoais",
        title: "Monify",
        description: "Monify é um site de finanças pessoais, eu planejava fazer ele completamente utilizável, mas atualmente é só um frontend sem funções (não tenho planos de finalizar esse projeto).",
        demo: "https://monify-beta.vercel.app/",
        source: "https://github.com/Grellheist/monify",
        technologies: [
            "TailwindCSS",
            "SvelteKit",
            "Typescript",
        ],
        account: { username: "N/A", password: "N/A" }
    },
]

export default projects

