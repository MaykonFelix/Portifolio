import Portfolio from "src/shared/components/Portfolio/Portfolio";
import Resume from "src/shared/components/Resume/Resume";
import Features from "src/shared/components/Features/Features";
import { Hero, ParticleDefault } from "src/shared/components/";

import { motion } from "framer-motion";

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Hero />
      <Features />
      <Portfolio />
      <Resume />
      <ParticleDefault />
    </motion.div>
  );
};
