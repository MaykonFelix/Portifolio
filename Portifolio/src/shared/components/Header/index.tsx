import { useState } from "react";

import ScienceIcon from "@mui/icons-material/Science";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import "./style.css";

import LogCatColor from "../pic/LogCatColor.png";
import { Link } from "react-router-dom";

export const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header?.classList.toggle("active", window.scrollY > 50);
  });

  // Toogle Menu
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <div id="home"></div>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <img src={LogCatColor} alt="Logo" />
            <h1>Maykon</h1>
          </div>

          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <Link to="/">home</Link>
              </li>

              <li>
                <a href="#features">Conhecimentos</a>
              </li>
              <li>
                <a href="#portfolio">Portfólio</a>
              </li>
              <li>
                <a href="#resume">Resumo</a>
              </li>
              <li>
                <Link to="/apigithub">Api</Link>
              </li>
              <li>
                <Link to="/particle">Particle</Link>
              </li>
              <li>
                <Link to="/playGround">
                  <ScienceIcon />
                  Playground
                </Link>
              </li>
            </ul>
            <a className="up" href="#home">
              <ArrowDropUpIcon />
            </a>

            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
