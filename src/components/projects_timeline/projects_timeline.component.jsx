import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import './projects_timeline.style.css';
// projects
import L_GetGitHubInfo from "../../assets/img/projects/evernote.png";
import L_SmartBrain from "../../assets/img/projects/brain.webp";
import L_RoboFriends from "../../assets/img/projects/Robofriends.webp";
import L_ProductHuntClone from "../../assets/img/projects/product_hunt_clone.webp";
import L_PortfolioUsingDjango from "../../assets/img/projects/portfolioUsingDjango.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";

const ProjectTimeline = () => {
    return (
        <div id ='projects'>
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                <ImageEvent date="22/09/2020" className="text-center" text="Evernote Clone" src={L_GetGitHubInfo} alt="Get GitHub Info">
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> An app where we create notes and there is a feature of archive
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>Store any number of notes</li>
                                <li>Archive any number of notes</li>
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image src={L_NODE_JS} alt="React" rounded className="image-style1 m-1"></Image> Node.js
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image src={L_GIT} alt="Github API" rounded className="image-style1 m-1"></Image> GitHub API
                                    </span>
                                </li>
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton href="https://akjha96.github.io/getGithubInfo/" target="_blank">
                        SEE LIVE
                        </UrlButton>
                        <UrlButton href="https://github.com/akjha96/getGithubInfo" target="_blank">
                        SOURCE CODE
                        </UrlButton>
                    </div>
                    </div>
                </ImageEvent>

                {/* Farmer portal */}
                <ImageEvent date="1/10/2020" className="text-center" text="EasyFarm" src={L_SmartBrain} alt="EasyFarm">
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> An app that helps the farmer in many ways.
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>Farmer can sell his corps</li>
                                <li>Weather Update</li>
                                <li>Keep tracks of the price of the corps for many states</li>
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style1 m-1"></Image> Node.js
                                    </span>
                                </li>
                                
                                <li>
                                    <span className="p-2">
                                    <Image src={L_POSTGRESQL} alt="MongoDB" rounded className="image-style1 m-1"></Image> MongoDB
                                    </span>
                                </li>
                                </ul>
                                <hr />
                                <em>
                                <strong>SignUp/ Signin:</strong>
                                <br />
                                <br />
                                You can <strong>register</strong> as new user or <strong>log in</strong> using the demo account below.
                                <br />
                                <br />
                                <strong>Demo Account Details:</strong>
                                <br />
                                email: demo@demo.com
                                <br />
                                password: demo
                                </em>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton href="https://smart-face-detect-app.herokuapp.com/" target="_blank">
                        SEE LIVE
                        </UrlButton>
                        <UrlButton href="https://github.com/akjha96/Smart_Brain" target="_blank">
                        SOURCE CODE
                        </UrlButton>
                    </div>
                    </div>
                </ImageEvent>
                </Events>
            </Timeline>
        </div>
    )
}

export default ProjectTimeline
