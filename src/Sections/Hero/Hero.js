import React, { useState, useEffect } from 'react';
import styles from './style/Hero.module.css';

const Hero = () => {
  const headings = [
    "Full Stack Web Developer",
    "Sr. Tech Executive at FED KIIT",
    "Marketing Executive at KRS"
  ];

  const [currentHeading, setCurrentHeading] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetween = 1500;

  useEffect(() => {
    let text = headings[currentHeading];
    let i = 0;
    let timeout;

    const typeText = () => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
        timeout = setTimeout(typeText, typingSpeed);
      } else {
        setTimeout(deleteText, delayBetween);
      }
    };

    const deleteText = () => {
      if (i > 0) {
        setDisplayText(text.slice(0, i - 1));
        i--;
        timeout = setTimeout(deleteText, deletingSpeed);
      } else {
        setTimeout(() => {
          setCurrentHeading((prev) => (prev + 1) % headings.length);
        }, 500);
      }
    };

    typeText();

    return () => clearTimeout(timeout);
  }, [currentHeading]);

  return (
    <div className={styles.heroBox}>
      <div className={styles.heroContent}>
        <h1>Vinayak Anil Puranik</h1>
        <div className={styles.subHeading}>
          <h2>
            {displayText}
            <span className={styles.cursor}></span>
          </h2>
        </div>
        <p>
          I am a full stack web developer passionate about learning new skills and creating innovative projects that solve real-life problems. 
          Currently, I am a 3rd-year B.Tech Computer Science Engineering student at KIIT University in Bhubaneswar, Odisha.
        </p>
      </div>
      <div className={styles.heroImageContainer}>
        <div className={styles.heroImageBox}>
          <img className={styles.heroImage} src="https://i.ibb.co/0skPvwT/my.png" alt="Vinayak Anil Puranik" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
