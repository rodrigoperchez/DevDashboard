import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section className="projects-page">

      <div className="page-heading">

        <div>

          <p className="eyebrow">
            PORTAFOLIO
          </p>

          <h2>
            Mis proyectos
          </h2>

          <p>
            Proyectos personales y académicos
            desarrollados durante mi aprendizaje.
          </p>

        </div>

        <div className="project-count">
          {projects.length} proyectos
        </div>

      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

    </section>
  );
}

export default Projects;