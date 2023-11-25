const projects = [
    {
        id:1,
        name: "Repair Cafe",
        description: "Creation d'une app web pour une association de repair cafe Luxembourgeoise afin de pouvoir voir les prochains evenements et s'inscrire a ceux-ci pour les réparateurs bénevoles",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "project1.png",
        link_msg: "Voir le site",
        link: "https://projet-12-repair-cafe-front.vercel.app/"
    },
    {
        id:2,
        name: "Visualiseur d'algorithme de tri",
        description: "Visualiseur d'algorithme de tri en React fait en suivant le tutoriel de Clement Mihailescu",
        technologies: ["React", "JavaScript"],
        image: "project2.png",
        link_msg: "Voir le repo",
        link: "https://github.com/Phfyx/sorting-visualizer"
    }
];

const technos = {
    learned: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Git", "GitHub"],
    currently_learning: ["Java", "Angular"]
}

export default {projects, technos};
