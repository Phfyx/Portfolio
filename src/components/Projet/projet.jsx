import React from "react";
import data from "../../assets/data.js";
import "./projet.css";
import { useDispatch, useSelector } from "react-redux";
import { setProjet } from "../../state/Slice/Slice.js";

function Projet() {
  const projects = data.projects;
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project.value);

  return (
    <>
      <section className="project p-8 basis-5/12">
        <h2 className="text-4xl md:text-8xl mb-8">Mes projets</h2>
        <div className="project-wrapper">
          <div className="wrapper">
            {projects.map((project) => (
              <a
                className="hover:cursor-pointer bg-grey mb-4"
                onClick={() => dispatch(setProjet(project))}
              >
                <h3 className="project-title">{project.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projet;
