import React from 'react'
import styles from './style/Contact.module.css'
import SocialCard from '../../Components/SocialCard/SocialCard'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
    <>
        <div className={`${styles.contactBox}`}>
            <h2>Contact</h2>
            <div className={`${styles.socialBox}`}>
                <div>
                    <SocialCard img="https://i.ibb.co/CBXHVvK/pngwing-com-11.png" link="https://www.linkedin.com/in/vinayakpuranik04052004/"/>
                </div>
                <div>
                    <SocialCard img="https://i.ibb.co/HGF2rnG/pngwing-com-12.png" link="https://github.com/VinayakP07"/>
                </div>
                <div>
                    <SocialCard img="https://i.ibb.co/JjwZN2P/pngwing-com-13.png" link="https://www.instagram.com/vinayak_puranik07?igsh=enpoejR3ZG44Z2x0"/>
                </div>
            </div>
            {/* <div className={`${styles.formBox}`}>
                <Link to="" target='_blank'><button>Reach Out</button></Link>
            </div> */}
        </div>
    </>
  )
}

export default Contact