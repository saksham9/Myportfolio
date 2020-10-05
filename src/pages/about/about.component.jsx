import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './about.style.css';
import profile from "../../assets/img/profile/download.png"
import Button from "react-bootstrap/Button";

const About=()=> {
  return (
    <div id="about">
    <div className="about">
    <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
    <Container>
        <Row className="pt-3 pb-5 align-items-center">
            {/* Profile Pic */}
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" src={profile} alt="profile" />
              </Row>
            </Col>
            {/* About Section Description */}
            <Col xs={12} md={6}>
            <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Saksham Agrawal</strong>
                <br />A passionate programmer, born and brought up in India. I am a Full Stack Web Developer with React.js, Node.js, and MongoDB as my tech stack.
                <br />
                In 2017, I successfully completed my Engineering with specialization in 'Computer Science'.
                <br />
                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                <br />
                Along with that, I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/saksham9" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/saksham-agrawal-85b19ba6/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
        </Row>
    </Container>
    </div>
    </div>
  );
}

export default About;
