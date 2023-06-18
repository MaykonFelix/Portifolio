import styles from "./Particle.module.css";
import { ParticleTest } from "src/shared/components/Particle/";

export const Particle = () => {
  return (
    <>
      <div className={styles.layout}>
        <ParticleTest />
        <div>Particle</div>
        <img
          src="https://images.unsplash.com/photo-1506426305266-2b7e740fd828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </div>
    </>
  );
};
