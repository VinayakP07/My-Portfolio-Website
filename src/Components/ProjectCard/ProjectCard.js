/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import styles from './style/ProjectCard.module.css'
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {

    const {img, heading, desc, git1, gitf, gitb, gitfLink, gitbLink, gitLink} = props;

  return (
    <>
        <div className={`${styles.projectCardBox}`}>
            <img src={img} alt="Image" />
            <div className={`${styles.projectCardContent}`}>
                <h3>{heading}</h3>
                <p>{desc}</p>
                <div className={`${styles.cardButton}`}>
                    {git1 && <Link to={gitLink} target='_blank'><button>GitHub Repository</button></Link>}
                    {gitf && <Link to={gitfLink} target='_blank'><button>GitHub Repository - Frontend</button></Link>}
                    {gitb && <Link to={gitbLink} target='_blank'><button>GitHub Repository - Backend</button></Link>}
                </div>
            </div>
        </div>
    </>
  )
}

export default ProjectCard