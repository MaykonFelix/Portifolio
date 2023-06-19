import styles from "./styles.module.css";
import { motion } from "framer-motion";

export const Playground = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 0.3 }}
      className={styles.background}
    >
      <div className="container">
        <div className={styles.principal}>
          <h1>PlayGround</h1>
          <h1>Area de Teste</h1>
        </div>
      </div>
    </motion.div>
  );
};
