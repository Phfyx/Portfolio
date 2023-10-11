import React from "react";

function Message() {
  return (
    <>
      <div className="container flex rounded-3xl p-2 bg-gradient-to-tr from-blue-200 to-grey">
        <section className="aboutme  bg-grey p-10 rounded-l-[calc(1.5rem-0.5rem)]">
          <h1 className="text-8xl mb-8">Bonjour,</h1>
          <p className="pl-4 border-l ">
            Je m'appelle Mohamed Benomar et je suis un développeur Web Junior
            basé en banlieue Parisienne. J'aime créer des interfaces épurés et
            immersive afin de créer une expérience utilisateur harmonieuse.
          </p>
        </section>
        <section className=" bg-grey p-10 rounded-r-[calc(1.5rem-0.5rem)]">
          <h2 className="text-4xl">Mes projects</h2>
          <p>Repair Cafe</p>
        </section>
          
      </div>
    </>
  );
}

export default Message;
