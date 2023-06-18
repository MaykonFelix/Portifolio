import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
// import { loadFull } from "tsparticles"; // loads tsparticles
import type { Container, Engine } from "tsparticles-engine";

import snow from "./Options/snow"; // Import Options
import amongUs from "./Options/amongUs"; // Import Options

import { useCallback, useState } from "react";

export const ParticleTest = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  const [option, setOption] = useState(amongUs);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={option}
      loaded={particlesLoaded}
    />
  );
};
