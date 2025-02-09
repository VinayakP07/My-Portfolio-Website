import React from 'react'
import styles from './style/SocialCard.module.css'
import { Link } from 'react-router-dom'

const SocialCard = (props) => {

    const {img, link} = props;

  return (
    <>
        <div className={`${styles.socialCardBox}`}>
                <Link to={link} target='_blank'><img src={img} alt="Image" /></Link>
        </div>
    </>
  )
}

export default SocialCard