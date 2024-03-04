import MetaTentangKami from "@/components/MetaData/TentangKami";
import SliderBlog from "@/components/elements/AllSlider/SliderBlog";
import AboutBs from "@/components/statik/about";
import HeaderAbout from "@/components/statik/about/header";
import Head from "next/head";

export async function getServerSideProps() {
  const reqFeatured = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=*`
  );
  const sliderBlog = await reqFeatured.json();

  return {
    props: {
      slider: sliderBlog,
    },
  };
}

export default function TentangKami({ slider }) {
  return (
    <>
      <MetaTentangKami />
      <HeaderAbout />
      <AboutBs />
      <SliderBlog {...slider} />
    </>
  );
}
