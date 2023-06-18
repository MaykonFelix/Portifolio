import { Outlet } from "react-router-dom";
import { Header, FooterNew, WhatsApp } from "src/shared/components/";
import { NewTitle } from "src/shared/components/byTitle";

export const Layout = () => {
  return (
    <>
      <NewTitle />
      <Header />
      <Outlet />
      <FooterNew />
      <WhatsApp />
    </>
  );
};
