import React, { useEffect, useState, useRef } from "react";
import styles from "./style/Contact.module.css";
import SocialCard from "../../Components/SocialCard/SocialCard";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={contactRef}
      className={`${styles.contactBox} ${isVisible ? styles.show : ""}`}
    >
      <h2>Contact</h2>
      <div className={`${styles.socialBox}`}>
        <div>
          <SocialCard
            img="https://i.ibb.co/CBXHVvK/pngwing-com-11.png"
            link="https://www.linkedin.com/in/vinayakpuranik04052004/"
          />
        </div>
        <div>
          <SocialCard
            img="https://i.ibb.co/HGF2rnG/pngwing-com-12.png"
            link="https://github.com/VinayakP07"
          />
        </div>
        <div>
          <SocialCard
            img="https://i.ibb.co/JjwZN2P/pngwing-com-13.png"
            link="https://www.instagram.com/vinayak_puranik07?igsh=enpoejR3ZG44Z2x0"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
