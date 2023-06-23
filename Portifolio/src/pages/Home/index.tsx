import Portfolio from "src/shared/components/Portfolio/Portfolio";
import Resume from "src/shared/components/Resume/Resume";
import Features from "src/shared/components/Features/Features";
import { Hero, ParticleDefault } from "src/shared/components/";

import { motion } from "framer-motion";
import styles from "./styles.module.css";

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <ParticleDefault />
      <div className={styles.particles}></div>
      <Hero />
      <Features />
      <Portfolio />
      <Resume />
    </motion.div>
  );
};
