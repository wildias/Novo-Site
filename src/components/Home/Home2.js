import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Wil.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { LanguageContext } from "../../Context/LanguageContext";

function Home2() {
  const { language } = useContext(LanguageContext);

  const texts = {
    pt: {
      introduce: "PERMITA-ME APRESENTAR",
      aboutMe:
        "Me apaixonei pela programação e pelo menos aprendi algo, eu acho… 🤷‍♂️",
      fluent: "Sou fluente em tecnologias que incluem, mas não se limitam a: ",
      fieldInterest:
        "Tenho interesse na construção de novas tecnologias, softwares e produtos web, além de áreas relacionadas a BI.",
      passion:
        "Sempre que possível, aplico minha paixão no desenvolvimento de produtos com Node.js e Bibliotecas e Frameworks Modernos de Javascript, como React.js e Next.js.",
      findMe: "ME ENCONTRE EM",
      connect: "Sinta-se à vontade para se conectar comigo",
    },
    en: {
      introduce: "LET ME INTRODUCE",
      aboutMe:
        "I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️",
      fluent: "I am fluent in technologies that include, but are not limited to: ",
      fieldInterest:
        "I am interested in building new technologies, software and web products, as well as areas related to BI.",
      passion:
        "Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks like React.js and Next.js.",
      findMe: "FIND ME ON",
      connect: "Feel free to connect with me",
    },
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">

            <h1 style={{ fontSize: "2.6em" }}>
              {texts[language].introduce}{" "}
              <span className="purple">
                {language === "pt" ? "A MIM MESMO" : "MYSELF"}
              </span>
            </h1>

            <p className="home-about-body">
              {texts[language].aboutMe}
              <br />
              <br />
              {texts[language].fluent}
              <i>
                <b className="purple"> C# .NET, JavaScript, HTML, CSS, Vue.js e React.js. </b>
              </i>
              <br />
              <br />
              {texts[language].fieldInterest}
              <br />
              <br />
              {texts[language].passion}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{texts[language].findMe}</h1>
            <p>
              {texts[language].connect}
            </p>
            <ul className="home-about-social-links">

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/wilgner-dias"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/wildias"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://api.whatsapp.com/send?phone=5522998499091&text=Ol%C3%A1%2C%20tudo%20bem%3F"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=wildiasdev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
