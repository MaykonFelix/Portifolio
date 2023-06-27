import styles from "./styles.module.css";

import { motion, useMotionValue, useTransform } from "framer-motion";

import ControlCameraIcon from "@mui/icons-material/ControlCamera";

export const FramerMotion = () => {
  const x = useMotionValue(0);

  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#ff008c", "#7700ff", "rgb(255, 255, 0)"]
  );

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 0.3 }}
      className={styles.background}
    >
      <div className="container">
        <motion.div className={styles.principal} style={{ background }}>
          <h1 style={{ color: "#ccc" }}>Framer Motion</h1>
          <h2 style={{ color: "#ccc" }}>Teste</h2>

          <motion.div
            drag
            dragConstraints={{
              top: -300,
              left: -300,
              right: 300,
              bottom: 300,
            }}
            style={{ x }}
            whileHover={{ scale: 1.5, borderRadius: "20px" }}
            whileTap={{ scale: 0.5, borderRadius: "10px" }}
            className={styles.caixa}
          >
            <ControlCameraIcon color="primary" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
