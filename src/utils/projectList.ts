import whisker from "/projects/whisker.png"
import monify from "/projects/monify.png"

const projects = [
    {
        picture: whisker,
        alt: "Twitter clone picture",
        title: "Whisker",
        description: "Whisker is a social media Website, and a Twitter Clone. It was designed to copy Twitter's layout and design, and it has Tweets (or Meows), Likes and Comments as functionalities. You need to be logged in to see the functionalities.",
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
        alt: "A finance website",
        title: "Monify",
        description: "Monify is a personal finance website, and it's currently my ongoing project.",
        demo: "https://monify-beta.vercel.app/",
        source: "https://github.com/Grellheist/monify",
        technologies: [
            "TailwindCSS",
            "SvelteKit",
            "Typescript",
            "Supabase",
            "MySQL",
            "Vercel",
        ],
    },
]

export default projects
