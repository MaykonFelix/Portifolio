import styles from "./styles.module.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";

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
        <motion.div className={styles.principal}>
          <h1>PlayGround</h1>
          <h2>Testes</h2>
        </motion.div>
      </div>
    </motion.div>
  );
};
