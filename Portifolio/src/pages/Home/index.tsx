import Portfolio from "src/shared/components/Portfolio/Portfolio";
import Resume from "src/shared/components/Resume/Resume";
import Features from "src/shared/components/Features/Features";
import { Hero, ParticleDefault } from "src/shared/components/";

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Portfolio />
      <Resume />
      <ParticleDefault />
    </>
  );
};
