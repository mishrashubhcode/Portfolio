import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img 
            src = {getImageUrl("about/about-me.png")}
            alt='About-me-image'
            className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorImg.png")} alt='cursor-image' />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>
                    I'm a Frontend Developer, adept in HTML, CSS, JavaScript, and React. 
                    I focus on creating engaging and responsive websites for top user experiences.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/bckndImg.png")} alt='backend-image' />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>
                    I'm a Backend Developer, proficient in c#, Python, Java and Node.js. 
                    I specialize in creating high-performance, scalable web applications.
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default About
