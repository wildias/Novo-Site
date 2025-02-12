import React, { useContext } from "react";
import Typewriter from "typewriter-effect";
import { LanguageContext } from "../../Context/LanguageContext";

function Type() {
  const { language } = useContext(LanguageContext);

  const texts = {
    pt: [
      "Desenvolvedor FullStack",
      "Professor de Informática",
    ],
    en: [
      "FullStack Developer",
      "Computer Teacher",
    ],
  };

  return (
    <Typewriter
      options={{
        strings: texts[language],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
