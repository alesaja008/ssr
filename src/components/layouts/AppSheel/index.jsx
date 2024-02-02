import React from "react";
import NavbarBs from "../Navbar";
import Footer from "../Footer";
import ButtonChat from "../ButtonNavigasi";

const AppSheel = (props) => {
  const { children } = props;
  return (
    <main>
      <NavbarBs />
      {children}
      <Footer />
      <ButtonChat />
    </main>
  );
};

export default AppSheel;
