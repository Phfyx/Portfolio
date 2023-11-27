import {useEffect} from "react";
import data from "../../assets/data.js";
import {  animate} from "framer-motion";
import { useSelector } from 'react-redux';

function Message(props) {
  const technos = data.technos;
  const project = useSelector((state) => state.project.value);
  console.log(project);

useEffect(() => {
    animate("section.aboutme", { x: [0, 100] }, { type: "spring" })
})

if (project === null){
  return (
    <>
      
        <section className="aboutme relative basis-7/12 p-8 mr-48">
          <article className="message-d'accroche">
            <h1 className="text-8xl mb-8">Bonjour,</h1>
            <p className="pl-4 border-l mb-8">
              Je m'appelle Mohamed Benomar et je suis un développeur Web Junior
              basé en banlieue Parisienne. J'aime concevoir des interfaces épurés et
              immersive afin de créer une expérience utilisateur harmonieuse.
            </p>
          </article>
          <article className="Technos flex flex-col">
            <h2 className="text-4xl mb-8">Technos </h2>
            <span>Connus: {technos.learned}</span>
            <span>En cours d'apprentissage: {technos.currently_learning}</span>
          </article>
          
        </section>
          
    </>
  );
}else{
  return (
    <>
      
        <section className="aboutme p-8 mr-48 w-3/5">
          <h1 className="text-8xl mb-8">{project.name}</h1>
          <p className="pl-4 border-l mb-8">
            {project.description}
          </p>
          <a className="mb-8" href={project.link}> {project.link_msg}</a>
        </section>
          
    </>
  );
}
  
}

export default Message;
