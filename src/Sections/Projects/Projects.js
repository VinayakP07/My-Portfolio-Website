import React from 'react'
import styles from './style/Projects.module.css'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'

const Projects = () => {
  return (
    <>
        <div className={`${styles.projectBox}`}>
            <h2>My Projects</h2>
            <div className={`${styles.projectCardBox}`}>

              <ProjectCard img="https://i.ibb.co/t8mhSS1/hotel-manage.png" heading="Guest House Management Web Application" desc="A dual-dashboard web application for guest house management at Katni Birla White's guest house, supporting over 100 users and 10 admin functionalities. Streamlined room requests, approvals, and assignments, improving operational efficiency by 30." gitf={1} gitb={1} gitfLink="https://github.com/VinayakP07/Guest-House-Management-Frontend" gitbLink="https://github.com/VinayakP07/Guest-House-Management-Backend" />

              <ProjectCard img="https://i.ibb.co/VjpgRvg/warehouse-management-logo.png" heading="Warehouse Management Web Application" desc="A web application to manage warehouse inventory, tracking over 100 stock items and recording purchase and sales prices. The application calculates profit or loss for each item and provides detailed insights into net income, reducing paperwork by over 50%." gitf={1} gitb={1} gitfLink="https://github.com/VinayakP07/Warehouse-Management-App-Frontend" gitbLink="https://github.com/VinayakP07/Warehouse-Management-App-Backend"  />

              <ProjectCard img="https://i.ibb.co/68QwNch/2758e5f22b481b8bd95a93bd9f8a820e.png" heading="iNoteBook - Online Notes Storage" desc="Developed a secure cloud-based web application for storing notes, ideas, and to-do tasks, allowing users to add, update, and delete notes with ease. Implemented global accessibility to enable users to access their notes from anywhere at any time, and ensured high-level security to protect user data and account information." gitf={1} gitb={1} gitfLink="https://github.com/VinayakP07/iNoteBook-Frontend" gitbLink="https://github.com/VinayakP07/iNoteBook-Backend"  />

              <ProjectCard img="https://i.ibb.co/NxFxwfn/images.jpg" heading="Daily News - Get Latest New Update" desc="A web application that fetches APIs to deliver daily news updates across 5+ categories, including sports, technology, and health. The app provide real-time updates and automatically refreshing news content every 24 hours to ensure the latest information is available." git1={1} gitLink="https://github.com/VinayakP07/DailyNews-News-App" />
            </div>
        </div>
    </>
  )
}

export default Projects