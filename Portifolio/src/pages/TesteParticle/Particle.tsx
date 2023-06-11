import { Link } from "react-router-dom";

import styles from "./Particle.module.css";

export const Particle = () => {
  return (
    <>
      <Link className={styles.navLink} to="/">
        Home
      </Link>
      <div>Particle</div>
    </>
  );
};
