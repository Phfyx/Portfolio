const projects = [
    {
        id:1,
        name: "Repair Cafe",
        description: "Creation d'une app web pour une association de repair cafe Luxembourgeoise afin de pouvoir voir les prochains evenements et s'inscrire a ceux-ci pour les réparateurs bénevoles.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "project1.png",
        link_msg: "Voir le site",
        link: "https://projet-12-repair-cafe-front.vercel.app/"
    },
    {
        id:2,
        name: "Visualiseur",
        description: "Visualiseur d'algorithme de tri en React fait en suivant le tutoriel de Clement Mihailescu.",
        technologies: ["React", "JavaScript"],
        image: "project2.png",
        link_msg: "Voir le repo",
        link: "https://github.com/Phfyx/sorting-visualizer"
    }
];

const technos = [
    {
        name: "Javascript",
        image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        name: "NodeJS",
        image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
        name: "React",
        image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
        name: "HTML",
        image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
        name: "CSS",
        image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
        name: "Git",
        image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
        name: "Github",
        image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
        name: "Visual Studio Code",
        image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    }
 
]

export default {projects, technos};
