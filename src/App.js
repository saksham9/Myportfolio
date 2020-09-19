import React from 'react';
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
// components

import MyNavbar from "./components/my-navbar/mynavbar.component"
import MyCrousal from "./components/my-carousal/my-carousal.component"
import TitleMessage from "./components/title-message/title-message.components";
import About from "./pages/about/about.component"

import './App.css';

const App=()=> {
  return (
    <div className="App" style={{ position: "relative" }}>
    <MyNavbar />
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
    </div>
  );
}

export default App;
