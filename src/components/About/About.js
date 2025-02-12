import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { LanguageContext } from "../../Context/LanguageContext";

function About() {
  const { language } = useContext(LanguageContext);

  const texts = {
    pt: {
      know: "Saiba Quem",
      im: "EU SOU",
      skills: "Conjunto de",
      skills2: "Habilidades",
      tools: "Ferramentas",
      tools2: "que eu uso",
    },
    en: {
      know: "Know Who",
      im: "I'M",
      skills: "Professional",
      skills2: "Skillset",
      tools: "Tools",
      tools2: "I use",
    },
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {texts[language].know} <strong className="purple">{texts[language].im}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
        {texts[language].skills} <strong className="purple">{texts[language].skills2}</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{texts[language].tools}</strong> {texts[language].tools2}
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
