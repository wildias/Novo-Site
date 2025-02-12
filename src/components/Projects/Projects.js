import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ToDo from "../../Assets/Projects/portfolio_pic5.png";
import emotion from "../../Assets/Projects/emotion.png";
import lSamurai from "../../Assets/Projects/portfolio_pic2.png";
import memory from "../../Assets/Projects/portfolio_pic3.png";
import suicide from "../../Assets/Projects/suicide.png";
import crashRun from "../../Assets/Projects/portfolio_pic1.png";
import { LanguageContext } from "../../Context/LanguageContext";

function Projects() {
  const { language } = useContext(LanguageContext);
  const JogoMemoria = "/Projetos/JogoDaMemoria/index.html";
  const Crash = "/Projetos/CrashJump/index.html";
  const Samurai = "/Projetos/JogoDeLuta/index.html";
  const ToDoList = "/Projetos/ToDoList/index.html";


  const texts = {
    pt: {
      heading: "Meus Trabalhos",
      heading2: "Recentes",
      description: "Aqui estão alguns projetos nos quais trabalhei recentemente.",
    },
    en: {
      heading: "My Recent",
      heading2: "Works",
      description: "Here are a few projects I've worked on recently.",
    },
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {texts[language].heading} <strong className='purple'> {texts[language].heading2}</strong>
        </h1>
        <p style={{ color: "white" }}>{texts[language].description}</p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memory}
              isBlog={false}
              title={language === "pt" ? "Jogo da Memória" : "Memory Game"}
              description={language === "pt"
                ? "Um jogo desenvolvido para proporcionar diversão e, ao mesmo tempo, auxiliar no desenvolvimento cognitivo e na memorização. Nesse jogo, o jogador precisa encontrar pares de cartas idênticas. Seu design foi inspirado no anime Yu-Gi-Oh!."
                : "A game designed to provide fun while also helping with cognitive development and memory enhancement. In this game, the player needs to find pairs of identical cards. Its design was inspired by the anime Yu-Gi-Oh!."
              }
              ghLink="https://github.com/wildias/Jogo-Da-Memoria"
              demoLink={JogoMemoria}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crashRun}
              isBlog={false}
              title={language === "pt" ? "Crash Runner – O Desafio Infinito" : "Crash Runner – The Infinite Challenge"}
              description={language === "pt"
                ? "Crash Runner é um mini jogo offline inspirado no clássico jogo do dinossauro do Google, mas trazendo um toque nostálgico com um dos personagens mais icônicos dos videogames: Crash Bandicoot!"
                : "Crash Runner is a mini offline game inspired by the classic Google Dinosaur Game, but with a nostalgic twist featuring one of the most iconic video game characters: Crash Bandicoot!"
              }
              ghLink="https://github.com/wildias/Crash-Runner"
              demoLink={Crash}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lSamurai}
              isBlog={false}
              title={language === "pt" ? "The Last Samurai – Um Duelo de Honra" : "The Last Samurai – A Duel of Honor"}
              description={language === "pt"
                ? "The Last Samurai é um jogo de luta inspirado nos clássicos de arcade, como Mortal Kombat, mas com um toque único: um duelo entre dois samurais. O jogo foi criado com uma jogabilidade simples e intuitiva, focada em combates estratégicos utilizando o teclado."
                : "The Last Samurai is a fighting game inspired by classic arcade games, like Mortal Kombat, but with a unique twist: a duel between two samurais. The game features a simple and intuitive gameplay, focusing on strategic combat using the keyboard."
              }
              ghLink="https://github.com/wildias/The-Last-Samurai"
              demoLink={Samurai}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDo}
              isBlog={false}
              title={language === "pt" ? "Task Flow" : "Task Flow"}
              description={language === "pt"
                ? "TaskFlow é um aplicativo de lista de tarefas desenvolvido para facilitar sua organização diária de forma rápida e intuitiva. Com uma interface minimalista e funcional, permite adicionar, editar e concluir tarefas com apenas alguns cliques, ajudando você a manter o foco e a produtividade."
                : "TaskFlow is a to-do list app designed to make daily organization quick and intuitive. With a minimalist and functional interface, it allows you to add, edit, and complete tasks with just a few clicks, helping you stay focused and productive."
              }
              ghLink="https://github.com/wildias/Task-Flow"
              demoLink={ToDoList}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI For Social Good"
              description={language === "pt"
                ? "Usando Processamento de Linguagem Natural (PLN) para detectar postagens relacionadas ao suicídio e ajudar na prevenção."
                : "Using Natural Language Processing (NLP) to detect suicide-related posts and help with prevention."
              }
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description={language === "pt"
                ? "Modelo treinado com TensorFlow para reconhecer emoções humanas a partir de imagens faciais."
                : "Model trained with TensorFlow to recognize human emotions from facial images."
              }
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
