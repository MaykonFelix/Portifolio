import Portfolio from "../components/Portfolio/Portfolio";
import Resume from "../components/Resume/Resume";
import Features from "../components/Features/Features";
import Header from "../components/head/index";
import Home from "../components/Home";
import Footer from "../components/footer";
import Partic from "../components/Particle";
import WhatsApp from "../components/Features/WhatsApp";

export const AppRoute = () => {
  return (
    <>
      <Partic />
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
