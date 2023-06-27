import "./style.css";

import Construction from "../pic/Construction.png";
import ReactLogo from "../pic/ReactLogo.png";
import NodeLogo from "../pic/NodeLogo.png";
import TSLogo from "../pic/TSLogo.png";
import MySQLogo from "../pic/MySQLogo.png";

import { Typewriter } from "react-simple-typewriter";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Hero = () => {
  return (
    <>
      <section id="home" className="hero">
        <div className="container f_flex">
          <div className="left">
            <h3>Bem vindo</h3>
            <h1>
              Ola, me chamo <span>Maykon</span>
            </h1>
            <h2>
              um
              <span>
                <Typewriter
                  words={[" Desenvolvedor Web.", " Developer!"]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={3000}
                />
              </span>
            </h2>

            <p>
              Em busca de crescimento profissional na área de Desenvolvimento,
              de forma a contribuir com o crescimento empresarial com medidas
              inovadoras e conhecimentos práticos, acredito que todo serviço me
              ajuda ampliar meus conhecimentos profissionais e de somar esforços
              junto com a empresa que estou atuando.
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>COMO ME ENCONTAR</h4>
                <div className="button">
                  <a href="https://github.com/MaykonFelix" target="_blank">
                    <button className="btn_shadow">
                      <GitHubIcon />
                    </button>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/maykonfelixwebdeveloper/"
                    target="_blank"
                  >
                    <button className="btn_shadow">
                      <LinkedInIcon color="primary" />
                    </button>
                  </a>
                  <a
                    href="https://www.facebook.com/maykon.felix.1"
                    target="_blank"
                  >
                    <button className="btn_shadow">
                      <FacebookIcon color="primary" />
                    </button>
                  </a>
                  <a
                    href="https://www.instagram.com/maykon.felix.silva/"
                    target="_blank"
                  >
                    <button className="btn_shadow">
                      <InstagramIcon />
                    </button>
                  </a>
                </div>
              </div>

              <div className="col_1">
                <h4>MELHORES HABILIDADES</h4>
                <button className="btn_shadow">
                  <img src={ReactLogo} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={NodeLogo} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={TSLogo} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={MySQLogo} alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="right_img">
              <p>#NeverStopLearning 🚀</p>
              <img src={Construction} alt="Imagem" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
