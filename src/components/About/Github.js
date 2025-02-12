import React, { useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { LanguageContext } from "../../Context/LanguageContext";

function Github() {
  const { language } = useContext(LanguageContext); 

  const texts = {
    pt: {
      intro: "Dias de",
      cod: "Código"
    },
    en: {
      intro: "Days I",
      cod: "Code"
    },
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        {texts[language].intro} <span className="purple">{texts[language].cod}</span>
      </h1>
      <GitHubCalendar
        username="wildias"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
