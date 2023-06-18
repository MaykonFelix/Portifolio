import Portfolio from "src/shared/components/Portfolio/Portfolio";
import Resume from "src/shared/components/Resume/Resume";
import Features from "src/shared/components/Features/Features";
import { Hero } from "src/shared/components/Hero";

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Portfolio />
      <Resume />
    </>
  );
};
