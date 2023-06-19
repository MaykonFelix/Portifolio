import styles from "./Particle.module.css";
import { ParticleTest } from "src/shared/components/Particle/";
import { motion } from "framer-motion";

export const Particle = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className={styles.layout}
      >
        <ParticleTest />
        <div>Particle Teste</div>
      </motion.div>
    </>
  );
};
