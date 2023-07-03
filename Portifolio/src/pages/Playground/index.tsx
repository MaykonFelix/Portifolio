import styles from "./styles.module.css";
import { motion, useMotionValue, useTransform } from "framer-motion";

import { KonvaTeste } from "src/shared/components";

export const Playground = () => {
  const x = useMotionValue(0);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 0.3 }}
      className={styles.background}
    >
      <div className="container">
        <h1>PlayGround</h1>
        <h2>Teste Konva</h2>
        <motion.div className={styles.principal}>
          <KonvaTeste />
        </motion.div>
      </div>
    </motion.div>
  );
};
