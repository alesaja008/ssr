import React from "react";
import NavbarBs from "../Navbar";
import Footer from "../Footer";





const AppSheel = (props) => {
  const { children } = props;
  return (
    <main>
      <NavbarBs />
      {children}
      <Footer />
    </main>
  );
};

export default AppSheel;
