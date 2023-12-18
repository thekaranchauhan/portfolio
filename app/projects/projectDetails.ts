export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects =[
{
    id: 0,
    name: "Writings",
    description: "Here I write the code snippets, business case studies and writings, some of them are solutions and code blocks that I came across while developing stuff.",
    technologies: ["React", "Rehype","Prism", "Reamark"],
    demo: "https://writings-by-karan.vercel.app/",
    image: require(".//../../public/projects/writings.png"),
    available: true,
},
{
  id: 1,
  name: "Docvi (In Progress)",
  description: "Unleashing a new era in secure collaboration because your documents deserve more than just storage.",
  technologies: ["Prisma", "Redux","MERN", "GraphQL"],
  demo: "https://www.docvi.xyz/",
  image: require(".//../../public/projects/docvi.png"),
  available: true,
},
{
  id: 2,
  name: "Moviepedia",
  description: "Encyclopedia of movies. Created using TMDB API.",
  technologies: ["Next", "Axios", "Styled Components"],
  demo: "https://moviepedia-beta.vercel.app/",
  image: require(".//../../public/projects/moviepedia.png"),
  available: true,
},
{
  id: 3,
  name: "Snip",
  description: "Convert your code into image and gif. Download and share it.",
  technologies: ["React", "Gifshot", "Prism"],
  demo: "https://snip-delta.vercel.app/",
  image: require(".//../../public/projects/snip.png"),
  available: true,
},
{
  id: 4,
  name: "Gitstar",
  description: "Shows most starred github repositories.",
  technologies: ["React", "Framer", "Chakra"],
  demo: "https://gitstar-beta.vercel.app/",
  image: require(".//../../public/projects/gitstar.png"),
  available: true,
},
{
  id: 5,
  name: "Emojico",
  description: "Search emojis for your projects and right click to copy it.",
  technologies: ["React", "Clipboard", "UUID"],
  demo: "https://itsemojico.vercel.app/",
  image: require(".//../../public/projects/emojico.png"),
  available: true,
},
{
  id: 6,
  name: "Lotterify",
  description: "Lottery app based on Ethereum Blockchain. Stake in and win prizes.",
  technologies: ["Soliity", "Chainlink", "Next"],
  demo: "https://lotterydap.vercel.app/",
  image: require(".//../../public/projects/lotterify.png"),
  available: true,
},
{
  id: 7,
  name: "Europa Fusion",
  description: "Website for a study abroad consultancy based client in India.",
  technologies: ["Next", "Tailwind", "Nodemailer"],
  demo: "https://europafusion.com/",
  image: require(".//../../public/projects/europa.png"),
  available: true,
},
{
  id: 8,
  name: "Reyansh Capital (In Progress)",
  description: "Website for a real estate agent based in India.",
  technologies: ["Next", "GSAP", "Tailwind"],
  demo: "https://reyansh-capital.vercel.app/",
  image: require(".//../../public/projects/rc.png"),
  available: true,
},
]