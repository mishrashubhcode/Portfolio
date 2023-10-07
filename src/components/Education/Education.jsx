import React from 'react'
import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("education/Humber.png")} alt='Humber-College' className={styles.eduImg} />
                <div className={styles.aboutItemText}>
                    <h3>Humber College, ON, Canada</h3>
                    <p className={styles.italic}>Post Graduate in Web Development (Jan 2023 - Dec 2023)</p>
                    <p>I came to Canada with 2 years of prior industry experience to pursue this course and enhance my web development skills. 
                        During my time at Humber College, I successfully completed various academic projects, 
                        demonstrating my commitment to advancing my web development expertise.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("education/ipu.png")} alt='IPU-College' className={styles.eduImg} />
                <div className={styles.aboutItemText}>
                    <h3>Guru Gobind Singh Indraprastha University, Delhi, India</h3>
                    <p className={styles.italic}>Bachelor of Technology in ECE (Aug 2016 - Oct 2020)</p>
                    <p>My studies at GGSIPU provided me with a strong foundation in computer networks, 
                        operating systems, RDBMS, and various technologies. 
                        These skills were instrumental in my tenure at Accenture, 
                        where I further honed my technical abilities and contributed to project success.</p>
                </div>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default Education
