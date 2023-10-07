import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";


const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, I am Shubham Mishra</h1>
            <p className={styles.description}>
            I am a seasoned Full Stack Developer, adept at unraveling complex tech puzzles. 
            With over 2 years of excellence in a spectrum of technologies, including C#, ASP .NET MVC, MySQL, 
            React, Node.js, and more, I specialize in crafting extraordinary web experiences.
            </p> 
            <p className={styles.description}>Ready to supercharge your team? Let's have a conversation – I'm your software development virtuoso.</p>
            <a href="mailto:kumarshubham41515@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src = {getImageUrl("hero/heroImage.png")} alt = "hero-image" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>

    </section>
  )
}

export default Hero
