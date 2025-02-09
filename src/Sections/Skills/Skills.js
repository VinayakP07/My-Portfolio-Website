import React, { useEffect, useRef, useState } from "react";
import styles from "./style/Skills.module.css";
import { Link } from "react-router-dom";

const skills = [
  { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", img: "https://i.ibb.co/n6cf36B/pngwing-com.png", className: styles.htmlLogo },
  { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", img: "https://i.ibb.co/mXgrRgr/pngwing-com-1.png", className: styles.cssLogo },
  { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", img: "https://i.ibb.co/8j9kN8x/pngwing-com-2.png", className: styles.jsLogo },
  { name: "React", url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started", img: "https://i.ibb.co/R9mxzhb/pngwing-com-3.png", className: styles.reactLogo },
  { name: "Node.js", url: "https://nodejs.org/docs/latest/api/", img: "https://i.ibb.co/GcmQ66L/pngwing-com-4.png", className: styles.nodeLogo },
  { name: "MongoDB", url: "https://www.mongodb.com/docs/", img: "https://i.ibb.co/hZD9Q1F/pngwing-com-5.png", className: styles.mongoLogo },
  { name: "Express.js", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction", img: "https://i.postimg.cc/8zqWj8WW/pngwing-com-8.png", className: styles.expressLogo },
  { name: "C", url: "https://devdocs.io/c/", img: "https://i.postimg.cc/7Lt31B5M/pngwing-com-9.png", className: styles.cLogo },
  { name: "Java", url: "https://developer.mozilla.org/en-US/docs/Glossary/Java", img: "https://i.postimg.cc/mkB7BKJ4/pngwing-com-10.png", className: styles.javaLogo },
  { name: "Python", url: "https://docs.python.org/3/", img: "https://i.postimg.cc/B6WgPfkN/pngwing-com-14.png", className: styles.pythonLogo },
];

const Skills = () => {
  const skillRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.skillBox} ref={skillRef}>
      <h1>My Skills</h1>
      <div className={styles.skillImages}>
        {skills.map((skill, index) => (
          <Link key={index} to={skill.url} target="_blank">
            <div className={`${styles.imageBox} ${isVisible ? styles.active : ""}`}>
              <img src={skill.img} alt={skill.name} className={skill.className} />
              <p>{skill.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Skills;
