import React from "react";
import "../styles/Skills.css";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js",
  "Express", "MongoDB", "Git", "REST APIs"
];

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card">{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
