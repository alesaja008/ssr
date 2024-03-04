import MetaTentangKami from "@/components/MetaData/TentangKami";

import AboutBs from "@/components/statik/about";
import HeaderAbout from "@/components/statik/about/header";
import Head from "next/head";

export default function TentangKami() {
  return (
    <>
      <MetaTentangKami />
      <HeaderAbout />
      <AboutBs />
    </>
  );
}
