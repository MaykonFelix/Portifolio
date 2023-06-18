import { Outlet } from "react-router-dom";
import { Header, Footer, WhatsApp } from "src/shared/components/";
import { NewTitle } from "src/shared/components/byTitle";

export const Layout = () => {
  return (
    <>
      <NewTitle />
      <Header />
      <Outlet />
      <Footer />
      <WhatsApp />
    </>
  );
};
