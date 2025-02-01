import React, { useState, useEffect } from 'react';
import styles from './style/Hero.module.css'

const Hero = () => {

    const [currentHeading, setCurrentHeading] = useState(0);
  
    const headings = [
      "Full Stack Web Developer",
      "Sr. Tech Executive at FED KIIT",
      "Marketing Executive at KRS"
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentHeading((prev) => (prev + 1) % headings.length);
      }, 5900);
  
      return () => clearInterval(interval);
    }, [headings.length]);

  return (
    <>
        <div className={`${styles.heroBox}`}>
            <div className={`${styles.heroContent}`}>
                <h1>Vinayak Anil Puranik</h1>
                <div className={`${styles.subHeading}`}>
                  <h2>{headings[currentHeading]}</h2>
                </div>
                <p>I am a full stack web developer passionate about learning new skills and creating innovative projects that solve real-life problems. Currently, I am a 3rd-year B.Tech Computer Science Engineering student at KIIT University in Bhubaneswar, Odisha.</p>
            </div>
            <div className={`${styles.heroImageBox}`}>
              <img className={`${styles.heroImage}`} src="https://i.ibb.co/0skPvwT/my.png" alt="" />
            </div>
        </div>
    </>
  )
}

export default Hero