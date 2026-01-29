import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    name: "Farm Produce Marketplace",
    description: "An online platform connecting farmers with buyers.",
    link: "https://github.com/Maurice-18/farm-produce-marketplace"
  },
  {
    name: "Car Service App",
    description: "Book car services and view detailing packages.",
    link: "https://github.com/Maurice-18/car-service-app"
  }
];

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
