import styles from "./styles.module.css";

import SchoolIcon from "@mui/icons-material/School";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import WorkIcon from "@mui/icons-material/Work";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

import Zoom from "@mui/material/Zoom";
import Tooltip from "@mui/material/Tooltip";

export const MenuItems = () => {
  return (
    <section className={styles.MenuItens}>
      <ul>
        <li>
          <span className={styles.icons}>
            <Tooltip
              title="Conhecimentos"
              placement="left"
              TransitionComponent={Zoom}
              arrow
            >
              <a href="#features">
                <SchoolIcon color="primary" />
              </a>
            </Tooltip>
          </span>
          <span>
            <a href="#features" className={styles.text}>
              Conhecimentos
            </a>
          </span>
        </li>
        <li>
          <span>
            <Tooltip
              title="Portfólio"
              placement="left"
              TransitionComponent={Zoom}
              arrow
            >
              <a href="#portfolio" className={styles.icons}>
                <AutoStoriesIcon color="primary" />
              </a>
            </Tooltip>
          </span>
          <span>
            <a href="#portfolio" className={styles.text}>
              Portfólio
            </a>
          </span>
        </li>
        <li>
          <span>
            <Tooltip
              title="Resumo"
              placement="left"
              TransitionComponent={Zoom}
              arrow
            >
              <a href="#resume" className={styles.icons}>
                <WorkIcon color="primary" />
              </a>
            </Tooltip>
          </span>
          <span>
            <a href="#resume" className={styles.text}>
              Resumo
            </a>
          </span>
        </li>
        <li>
          <Tooltip
            title="Subir"
            placement="left"
            TransitionComponent={Zoom}
            arrow
          >
            <a href="#" target="_top" className={styles.icons}>
              <ArrowCircleUpIcon color="primary" />
            </a>
          </Tooltip>
          <span>
            <a href="#" target="_top" className={styles.text}>
              Subir
            </a>
          </span>
        </li>
      </ul>
    </section>
  );
};
