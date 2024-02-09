import React from "react";
import NavbarBs from "../Navbar";
import Footer from "../Footer";
import ButtonChat from "../ButtonNavigasi";
import { useRouter } from "next/router";

const disableNavbar = ["/404"];

const AppSheel = (props) => {
  const { children } = props;
  const { pathname } = useRouter();
  return (
    <main>
      {!disableNavbar.includes(pathname) && <NavbarBs />}
      {children}
      {!disableNavbar.includes(pathname) && <Footer />}
      {!disableNavbar.includes(pathname) && <ButtonChat />}
    </main>
  );
};

export default AppSheel;
