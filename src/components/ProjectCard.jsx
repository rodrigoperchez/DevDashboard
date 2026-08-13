import React from "react";

function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <div className="project-header">

        <div className="project-icon">
          {project.name.charAt(0)}
        </div>

        <span className="project-status">
          {project.status}
        </span>

      </div>

      <h3>
        {project.name}
      </h3>

      <p className="project-description">
        {project.description}
      </p>

      <div className="technologies">

        {project.technologies.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}

      </div>

      <div className="progress-section">

        <div className="progress-info">

          <span>
            Progreso
          </span>

          <strong>
            {project.progress}%
          </strong>

        </div>

        <div className="progress-bar">

          <div
            className="progress"
            style={{
              width: `${project.progress}%`,
            }}
          />

        </div>

      </div>

      <div className="project-actions">

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>

      </div>

    </article>
  );
}

export default ProjectCard;