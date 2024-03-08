import { useEffect } from "react";
import { animate } from "framer-motion";
import { useSelector } from "react-redux";
import technos from "../../assets/data";

function Message() {
  const project = useSelector((state) => state.project.value);

  useEffect(() => {
    animate("section.aboutme", { x: [-50, 0] }, { type: "spring" });
  });

  if (project === null) {
    return (
      <div className="max-w-screen-lg">
        <section className="aboutme relative basis-7/12 p-8  md:mr-48">
          <article className="message-d'accroche">
            <h1 className="text-4xl md:text-8xl mb-8">Bonjour,</h1>
            <p className="text-base pl-4 border-l mb-8 md:text-xl">
              Je m'appelle Mohamed Benomar et je suis un développeur Web Junior
              basé en banlieue Parisienne. J'aime concevoir des interfaces
              épurés et immersive afin de créer une expérience utilisateur
              harmonieuse.
            </p>
          </article>
        </section>
      </div>
    );
  } else {
    return (
      <div className="max-w-screen-lg">
        <section className="aboutme relative basis-7/12 p-8 md:mr-48">
          <h1 className="text-4xl md:text-8xl mb-8">{project.name}</h1>
          <p className="text-base pl-4 border-l mb-8 md:text-xl">
            {project.description}
          </p>
          <h2>Fait avec :</h2>
          
          <div className="justify-between flex mt-4">
            <div>
              <a className="mb-8 underline font-bold" href={project.site_link}>
                Voir le site
              </a>
            </div>
            <div>
              <a className="mb-8 underline font-bold" href={project.github_link}>
                Voir le repo
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Message;
