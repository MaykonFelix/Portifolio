import styles from "./Particle.module.css";
import { ParticleTest } from "src/shared/components/Particle/";

export const Particle = () => {
  return (
    <>
      <div className={styles.layout}>
        <ParticleTest />
        <div>Particle Teste</div>
      </div>
    </>
  );
};
