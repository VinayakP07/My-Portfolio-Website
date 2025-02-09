import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './style/Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (e) => {
    if (e.target.closest(`.${styles.navBox}`)) return;
    closeMenu();
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <div className={`${styles.navBox}`}>
        <Link to="/">
          <img className={`${styles.logo}`} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7owKF3ZR9KjQZc13gRZjVzkzRQ5tRwxDN9A&s" alt="Logo" />
        </Link>
        
        <a href="https://drive.google.com/file/d/1rmXWmHhwZZ8A1aRwLDV8IelUVBf1O2cj/view?usp=drive_link" target='_blank' download className={styles.downloadBtn}>
          Download CV
        </a>

        <div className={`${styles.hamburger}`} onClick={toggleMenu}>
          <div className={`${styles.bar}`}></div>
          <div className={`${styles.bar}`}></div>
          <div className={`${styles.bar}`}></div>
        </div>

        <div className={`${styles.list} ${isMenuOpen ? styles.showMenu : ''}`}>
          <a href="#" onClick={closeMenu}><div>Home</div></a>
          <a href="#skills" onClick={closeMenu}><div>Skills</div></a>
          <a href="#experiences" onClick={closeMenu}><div>Experiences</div></a>
          <a href="#projects" onClick={closeMenu}><div>Projects</div></a>
          <a href="#contact" onClick={closeMenu}><div>Contact</div></a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
