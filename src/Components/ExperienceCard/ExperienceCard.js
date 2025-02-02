/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import styles from './style/ExperienceCard.module.css'

const ExperienceCard = (props) => {

    const {img, heading, desc} = props;

  return (
    <>
        <div className={`${styles.cardBox}`}>
            <img src={img} alt="image" /> 
            <h3>{heading}</h3>
            <p>{desc}</p>
        </div>
    </>
  )
}

export default ExperienceCard