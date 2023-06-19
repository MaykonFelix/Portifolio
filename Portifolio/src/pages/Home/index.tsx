import Portfolio from "src/shared/components/Portfolio/Portfolio";
import Resume from "src/shared/components/Resume/Resume";
import Features from "src/shared/components/Features/Features";
import { Hero, ParticleDefault } from "src/shared/components/";

import { motion } from "framer-motion";

export const Home = () => {
  return (
    <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth }}
    transition={{ duration: 0.3 }}
    >
      <Hero />
      <Features />
      <Portfolio />
      <Resume />
      <ParticleDefault />
    </motion.div>
  );
};
