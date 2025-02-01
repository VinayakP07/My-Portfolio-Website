import React from "react";
import styles from "./style/Experiences.module.css";
import ExperienceCard from "../../Components/ExperienceCard/ExperienceCard";

const Experiences = () => {
  return (
    <>
      <div className={`${styles.expBox}`}>
        <h1>My Experiences</h1>
        <div className={styles.cardBox}>
          <ExperienceCard
            img="https://i.ibb.co/7QbDpDK/bw.png"
            heading="Full Stack Web Developer Intern"
            desc="I completed a 6-week internship as a Full Stack Web Developer at Birla White Company, part of the ABG Group, in Katni, Madhya Pradesh, from June to July 2024. During this tenure, I developed a Guest House Management Web Application as a key project."
          />
          <ExperienceCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxptRwz_oiEwf0hQMhEwsbx9_yFGnxYRmG5w&s"
            heading="Full Stack Web Developer Intern"
            desc="At Hexbit.io, I collaborated with a team to design, develop, and deploy the official website, focusing on enhancing user experience. I actively participated in daily scrums, contributing to task allocation and progress tracking, ensuring smooth development cycles and timely delivery. This experience improved my technical skills, teamwork, and understanding of agile workflows."
          />
          <ExperienceCard
            img="https://i.ibb.co/mhvpWHn/fedkiit-logo.jpg"
            heading="Technical Executive"
            desc="As a Technical Executive at FED-KIIT, I am responsible for overseeing the management and maintenance of the official FED-KIIT website. This site is fully deployed and accessible globally, ensuring a seamless user experience. Additionally, I have served as an Organizing Committee Member for multiple events, contributing to their successful execution."
          />
          <ExperienceCard
            img="https://i.ibb.co/JjYRb82/krs-logo.jpg"
            heading="Marketing Executive"
            desc="As a Marketing Executive, I am responsible for managing the society's image and promoting its events. My role involves maintaining positive public relations and securing sponsorships for various events. Additionally, I have served as an Organizing Committee Member for multiple events, contributing to their successful execution."
          />
          <ExperienceCard
            img="https://i.ibb.co/FXWWsk2/nss-logo.jpg"
            heading="NSS Volunteer"
            desc="As a Volunteer, I am dedicated to serving the community and supporting our society's outreach efforts. My responsibilities include organizing and participating in various initiatives such as visits to slums, schools, and orphanages. Additionally, I help coordinate cleanliness drives and tree plantation events in our area."
          />
        </div>
      </div>
    </>
  );
};

export default Experiences;
