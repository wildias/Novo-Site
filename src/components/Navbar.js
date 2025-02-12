import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import logo from "../Assets/logo.png";
import { LanguageContext } from "../Context/LanguageContext"; // Importa o contexto
import "../Style/Navbar.css"; // Estilos do toggle

function NavBar() {
  const { language, setLanguage } = useContext(LanguageContext); // Obtém o idioma do contexto

  const texts = {
    pt: { 
      home: "Início", 
      about: "Sobre", 
      projects: "Projetos", 
      resume: "Currículo", 
      language: "BR" 
    },
    en: { 
      home: "Home", 
      about: "About", 
      projects: "Projects", 
      resume: "Resume", 
      language: "EN" 
    },
  };

  return (
    <Navbar expanded={false} fixed="top" expand="md" className="navbar">
      <Container>
        {/* LOGO */}
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>

        {/* TOGGLE MENU MOBILE */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {texts[language].home}
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link as={Link} to="/about">
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {texts[language].about}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project">
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> {texts[language].projects}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume">
                <CgFileDocument style={{ marginBottom: "2px" }} /> {texts[language].resume}
              </Nav.Link>
            </Nav.Item>

            {/* TOGGLE DE IDIOMA */}
            <Nav.Item className="language-switch">
              <FaGlobe className="language-icon" />
              <label className="switch">
                <input type="checkbox" checked={language === "en"} onChange={() => setLanguage(language === "pt" ? "en" : "pt")} />
                <span className="slider round"></span>
              </label>
              <span id="langText">{texts[language].language}</span>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
