import { Outlet } from "react-router-dom";
import { Header, FooterNew, WhatsApp } from "src/shared/components/";
import { NewTitle } from "src/shared/components/byTitle";
import { AnimatePresence } from "framer-motion";

export const Layout = () => {
  return (
    <>
      <NewTitle />
      <Header />
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
      <FooterNew />
      <WhatsApp />
    </>
  );
};
