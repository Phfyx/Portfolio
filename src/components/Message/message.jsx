import React from "react";

function Message(props) {
if (props.project === null){
  return (
    <>
      
        <section className="aboutme p-8 mr-48">
          <h1 className="text-8xl mb-8">Bonjour,</h1>
          <p className="pl-4 border-l ">
            Je m'appelle Mohamed Benomar et je suis un développeur Web Junior
            basé en banlieue Parisienne. J'aime concevoir des interfaces épurés et
            immersive afin de créer une expérience utilisateur harmonieuse.
          </p>
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
          <a className="mb-8" href={props.project.link}> Lien du project</a>
        </section>
          
    </>
  );
}
  
}

export default Message;
