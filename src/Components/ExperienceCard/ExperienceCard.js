import React, { useEffect, useRef, useState } from "react";
import styles from "./style/ExperienceCard.module.css";

const ExperienceCard = ({ img, heading, desc }) => {
  const cardRef = useRef(null);
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${styles.cardBox} ${isVisible ? styles.fadeInUp : ""}`}
    >
      <img src={img} alt="experience image" />
      <h3>{heading}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default ExperienceCard;
