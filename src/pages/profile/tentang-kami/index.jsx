import MetaTentangKami from "@/components/MetaData/TentangKami";
import SliderBlog from "@/components/elements/AllSlider/SliderBlog";
import AboutBs from "@/components/statik/about";
import HeaderAbout from "@/components/statik/about/header";
import Head from "next/head";

export default function TentangKami() {
  return (
    <>
      <MetaTentangKami />
      <HeaderAbout />
      <AboutBs />
      <SliderBlog />
    </>
  );
}
