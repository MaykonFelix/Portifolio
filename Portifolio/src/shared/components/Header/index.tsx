import { useState } from "react";
import { Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import "./style.css";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header?.classList.toggle("active", window.scrollY > 50);
  });

  const [Mobile, setMobile] = useState(false);

  return (
    <header className="header">
      <div className="container d_flex">
        <Stack direction="row" gap={1}>
          <Avatar
            alt="Maykon Felix"
            src="https://github.com/MaykonFelix.png"
            sx={{ width: 28, height: 28 }}
          />
          <Typography variant="h5" component="h1">
            Maykon
          </Typography>
        </Stack>

        <nav className="navlink">
          <ul
            className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
            onClick={() => setMobile(false)}
          >
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/particle">Particle</Link>
            </li>
            <li>
              <Link to="/framerMotion">Framer Motion</Link>
            </li>
            <li>
              <Link to="/playGround">Playground</Link>
            </li>
          </ul>

          <button className="toggle" onClick={() => setMobile(!Mobile)}>
            {Mobile ? (
              <i className="fas fa-times close home-btn"></i>
            ) : (
              <i className="fas fa-bars open"></i>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};
