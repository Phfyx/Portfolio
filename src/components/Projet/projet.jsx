import React from "react";
import { useState } from "react";
import projects from "../../assets/data.js";
import Message from "../Message/message.jsx";



function Projet() {

  const [project, setProject] = useState(null);

  return (
    <>  

        <Message project={project}/>
        <section className=" p-8">
          <h2 className="text-4xl mb-8">Mes projects</h2>
          
          { projects.map((project) => (
            <article key={project.id} className="mb-4">
              <a className= "hover: cursor-pointer" onClick={()=> setProject(project)}><h3 className="" >{project.name}</h3></a>
              <p className="text-grey-text">{project.desc}</p>
            </article>
          ))}
                
    
        </section>
    
    </>
  );
}

export default Projet;
