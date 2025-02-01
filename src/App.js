import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Contact from './Sections/Contact/Contact.js';
import Experiences from './Sections/Experiences/Experiences.js';
import Hero from './Sections/Hero/Hero.js'
import Projects from './Sections/Projects/Projects.js';
import Skills from './Sections/Skills/Skills.js';
function App() {

  

  return (
    <>

      <Navbar/>

      <section id='hero'>
        <Hero/>
      </section>

      <section id='skills'>
        <Skills/>
      </section>

      <section id='experiences'>
        <Experiences/>
      </section>

      <section id='projects'>
        <Projects/>
      </section>

      <section id='contact'>
        <Contact/>
      </section>

    </>
  );
}

export default App;
