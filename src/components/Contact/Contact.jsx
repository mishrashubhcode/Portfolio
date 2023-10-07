import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
      <footer id="contact" className={styles.container}>
        <div className={styles.text}>
          
          <h2>Contact</h2>
        
          <p>Feel free to reach out to me !</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email Image"/>
            <a href="mailto:kumarshubham41515@gmail.com">kumarshubham41515@gmail.com</a>
          </li>

          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn Image"/>
          
            <a href="https://www.linkedin.com/in/shubham-kumar-mishra/" target="#">LinkedIN</a>
          </li>

          <li className={styles.link}>

            <img src={getImageUrl("contact/githubIcon.png")} alt="Github Image" />
            <a href="https://github.com/mishrashubhcode" target="#">GitHub</a>

          </li>
        </ul>
      </footer>
    );
};