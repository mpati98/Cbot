import { Col, Tab, Container, Row, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import 'animate.css'
import TrackVisibility from "react-on-screen"

export const Projects = () => {

    const projects = [
        {
            title: "SmokeTube",
            description: "Community Service Projects",
            imgUrl: projImg1
        },
        {
            title: "Car/Truck detection, recognition and counting",
            description: "University thesis",
            imgUrl: projImg2
        },
        {
            title: "Kysumi",
            description: "Start-Up Economics",
            imgUrl: projImg3
        },
        {
            title: "SmokeTube",
            description: "Community Service Projects",
            imgUrl: projImg1
        },
        {
            title: "SmokeTube",
            description: "Community Service Projects",
            imgUrl: projImg1
        }
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate_fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>AI technologies have the potential to create a better world, but they also pose some challenges and risks, such as ethical, social, and legal issues. Therefore, it is important to ensure that AI technologies are developed and used in a responsible, inclusive, and human-centric way.</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Dummy sentences</Tab.Pane>
                                <Tab.Pane eventKey="third">Dummy sentences</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="bg" />
        </section>
    )
}