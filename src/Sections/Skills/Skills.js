import React from 'react'
import styles from './style/Skills.module.css'
import { Link } from 'react-router-dom'

const Skills = () => {
  return (
    <>
        <div className={`${styles.skillBox}`}>

            <h1>My Skills</h1>

            <div className={`${styles.skillImages}`}>

                <Link to="https://developer.mozilla.org/en-US/docs/Web/HTML" target='_blank'>
                    <div className={`${styles.imageBox}`}>
                        <img className={`${styles.htmlLogo}`} src="https://i.ibb.co/n6cf36B/pngwing-com.png" alt="HTML" />
                        <p>HTML</p>
                    </div>
                </Link>

                <Link to="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank'>
                    <div className={`${styles.imageBox}`}>
                        <img className={`${styles.cssLogo}`} src="https://i.ibb.co/mXgrRgr/pngwing-com-1.png" alt="CSS" />
                        <p>CSS</p>
                    </div>
                </Link>

                <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='_blank'>
                    <div className={`${styles.imageBox}`}>
                        <img className={`${styles.jsLogo}`} src="https://i.ibb.co/8j9kN8x/pngwing-com-2.png" alt="JavaScript" />
                        <p>JavaScript</p>
                    </div>

                </Link>

                <Link to="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started" target='_blank'>
                    <div className={`${styles.imageBox}`}>
                        <img className={`${styles.reactLogo}`} src="https://i.ibb.co/R9mxzhb/pngwing-com-3.png" alt="" />
                        <p>REACT</p>
                    </div>
                </Link>

                <Link to="https://nodejs.org/docs/latest/api/" target='_blank'>
                    <div className={`${styles.imageBox}`}>
                        <img className={`${styles.nodeLogo}`} src="https://i.ibb.co/GcmQ66L/pngwing-com-4.png" alt="" />
                        <p>NODE.JS</p>
                    </div>
                </Link>

                <Link to="https://www.mongodb.com/docs/" target='_blank'>
                    <div className={`${styles.imageBox}`}>
                        <img className={`${styles.mongoLogo}`} src="https://i.ibb.co/hZD9Q1F/pngwing-com-5.png" alt="" />
                        <p>MongoDB</p>
                    </div>
                </Link>

                <Link to="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction" target='_blank'>
                    <div className={`${styles.imageBox}`}>
                        <img className={`${styles.expressLogo}`} src="https://i.postimg.cc/8zqWj8WW/pngwing-com-8.png" alt="" />
                        <p>EXPRESS.JS</p>
                    </div>
                </Link>

                <Link to="https://devdocs.io/c/" target='_blank'>
                    <div className={`${styles.imageBox}`}>
                        <img className={`${styles.cLogo}`} src="https://i.postimg.cc/7Lt31B5M/pngwing-com-9.png" alt="" />
                        <p>C</p>
                    </div>
                </Link>

                <Link to="https://developer.mozilla.org/en-US/docs/Glossary/Java" target='_blank'>
                    <div className={`${styles.imageBox}`}>
                        <img className={`${styles.javaLogo}`} src="https://i.postimg.cc/mkB7BKJ4/pngwing-com-10.png" alt="" />
                        <p>JAVA</p>
                    </div>
                </Link>

                <Link to="https://docs.python.org/3/" target='_blank'>
                    <div className={`${styles.imageBox}`}>
                        <img className={`${styles.javaLogo}`} src="https://i.postimg.cc/B6WgPfkN/pngwing-com-14.png" alt="" />
                        <p>Python</p>
                    </div>
                </Link>


            </div>

        </div>
    </>
  )
}

export default Skills