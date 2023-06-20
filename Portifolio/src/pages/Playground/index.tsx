import styles from "./styles.module.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";

export const Playground = () => {
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
          <h1 style={{ color: "#ccc" }}>PlayGround</h1>
          <h2 style={{ color: "#ccc" }}>Movimenta</h2>

          <motion.div
            drag
            dragConstraints={{
              top: -300,
              left: -300,
              right: 300,
              bottom: 300,
            }}
            style={{ x }}
            whileHover={{ scale: 1.5, borderRadius: "30px" }}
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
