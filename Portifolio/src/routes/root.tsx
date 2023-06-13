import Portfolio from "src/shared/components/Portfolio/Portfolio";
import Resume from "src/shared/components/Resume/Resume";
import Features from "src/shared/components/Features/Features";
import { Header } from "src/shared/components/head/index";
import Home from "src/shared/components/Home";
import { ParticleDefault } from "src/shared/components/Particle/";
import WhatsApp from "src/shared/components/Features/WhatsApp";
import { NewTitle } from "src/shared/components/byTitle";
import { Footer } from "src/shared/components/footer";

export const AppRoute = () => {
  return (
    <>
      <NewTitle />
      <ParticleDefault />
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Footer />
      <WhatsApp />
    </>
  );
};
