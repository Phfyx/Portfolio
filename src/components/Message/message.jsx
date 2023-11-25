import React from "react";
import data from "../../assets/data.js";

function Message(props) {
  const technos = data.technos;
  console.log(technos)
if (props.project === null){
  return (
    <>
      
        <section className="aboutme p-8 mr-48">
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
      
        <section className="aboutme p-8">
          <h1 className="text-8xl mb-8">{props.project.name}</h1>
          <p className="pl-4 border-l mb-8">
            {props.project.description}
          </p>
          <a className="mb-8" href={props.project.link}> {props.project.link_msg}</a>
        </section>
          
    </>
  );
}
  
}

export default Message;
