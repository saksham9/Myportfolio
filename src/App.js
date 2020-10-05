import React from 'react';
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Slide from "react-reveal/Slide";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";

// components

import MyNavbar from "./components/my-navbar/mynavbar.component"
import MyCrousal from "./components/my-carousal/my-carousal.component"
import TitleMessage from "./components/title-message/title-message.components";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Experience from "./pages/experience/experience.component";
import ProjectTimeline from "./components/projects_timeline/projects_timeline.component";
import ContactForm from './pages/contact-form/contact-form.component';
import FooterPanel from './components/footer/footer.component';

import './App.css';

const App=()=> {
  return (
    <div className="App" style={{ position: "relative" }}>
    <MyNavbar />
    <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
    <MyCrousal/>
    <TitleMessage/>

    {/* About Section */}
    <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      {/* Skill Section */}
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      {/* Experience */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>
      {/* {% project TimeLine %} */}
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <ProjectTimeline />
        </Slide>
      </Container>
      {/* Contact form */}
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
      {/* Footer */}
      <hr />
      <FooterPanel />
    </div>
    
  );
}

export default App;
