import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { Button, Row } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import { AiOutlineDownload } from "react-icons/ai";
import { LanguageContext } from "../../Context/LanguageContext";
import { CgFileDocument } from "react-icons/cg";
import ResumePT from "../../Assets/WilgnerDias-PT.pdf"
import ResumeEN from "../../Assets/WilgnerDias-EN.pdf"

function AboutCard() {
  const { language } = useContext(LanguageContext);

  const texts = {
    pt: {
      intro: "Olá a todos, eu sou",
      from: ", do",
      job: "Atualmente trabalho como desenvolvedor de software na RCA Sistemas.",
      education: "Sou formado em Gestão da Tecnologia da Informação e atualmente estou me especializando em Engenharia de Software e Desenvolvimento de Sistemas com C#.",
      hobbies: "Além de programar, adoro me dedicar a outras atividades, como:",
      activities: [
        "Jogar videogame",
        "Ler livros",
        "Viajar",
        "Praticar esportes"
      ],
      quote: "faça acontecer!",
      city: "Rio de Janeiro, Brasil."
    },
    en: {
      intro: "Hi Everyone, I am",
      from: "from",
      job: "I am currently employed as a software developer at RCA Sistemas.",
      education: "I have a degree in Information Technology Management and am currently specializing in Software Engineering and Systems Development with C#.",
      hobbies: "Apart from coding, some other activities that I love to do!",
      activities: [
        "Playing Games",
        "Read books",
        "Travelling",
        "Play sports"
      ],
      quote: "make it happen!",
      city: "Rio de Janeiro, Brazil."
    },
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {texts[language].intro}{" "}
            <span className="purple">Wil Dias </span>
            {texts[language].from} <span className="purple"> {texts[language].city}</span>
            <br />
            {texts[language].job}
            <br />
            {texts[language].education}
            <br />
            <br />
            {texts[language].hobbies}
          </p>
          <ul>
            {texts[language].activities.map((activity, index) => (
              <li className="about-activity" key={index}>
                <ImPointRight /> {activity}
              </li>
            ))}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "{texts[language].quote}"
          </p>
          <footer className="blockquote-footer">Wil Dias</footer>

          {/* Linha com 2 botões */}
          <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
            <Button
              variant="primary"
              href={language === "pt" ? ResumePT : ResumeEN}
              target="_blank"
              style={{ maxWidth: "250px", marginRight: "10px" }}
            >
              <AiOutlineDownload />
              &nbsp; {language === "pt" ? "Baixar CV" : "Download CV"}
            </Button>
            <Button
              variant="primary"
              href="https://github.com/wildias/Certificados"
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <CgFileDocument />
              &nbsp;{language === "pt" ? "Certificados" : "Certificates"}
            </Button>
          </Row>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
