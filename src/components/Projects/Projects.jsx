import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      
      <h2 className={styles.title}>Featured Projects</h2>

      <div className={styles.projects}>
        {projects.map((project, id) => {
          
          return <ProjectCard key={id} project={project}/>;
        
        })}
      </div>
      <a href="https://github.com/mishrashubhcode" className={styles.contactBtn}>View More Projects</a>
    </section>
  );
};
