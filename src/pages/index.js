import Head from "next/head";
import { Inter } from "next/font/google";
import SliderHero from "@/components/elements/AllSlider/SliderHero";
import SliderClient from "@/components/elements/AllSlider/SliderClient";
import TemukanHome from "@/components/statik/Temukan";

import ReactGA from "react-ga4";
import StoreBisnis from "@/components/statik/B2B";
import Perjalanan from "@/components/statik/Perjalanan";
import Layanan from "@/components/statik/KeutamaanLayanan";
import KaumDinamis from "@/components/statik/KaumDinamis";
import SliderAward from "@/components/elements/AllSlider/SliderAward";
import MemberApps from "@/components/statik/MemberApps";
import SliderTestimonial from "@/components/elements/AllSlider/SliderTestimonial";
import SliderEventRecap from "@/components/elements/AllSlider/SliderEventRecap";
import MetaHome from "@/components/MetaData/Home";

import SliderBlog from "@/components/elements/AllSlider/SliderBlog";
import { testimoni } from "@/store/product/SliderTestimonial";

const TRACKING_ID = "G-S1ZPP0X3DV";
ReactGA.initialize(TRACKING_ID);
ReactGA.send({ hitType: "pageview", page: "/" });

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  blogs,
  recaps,
  awards,
  testimoni,
  product,
  sliderHero,
}) {
  // console.log(blogs);
  return (
    <>
      <div>
        <Head>
          <title>COBAIN</title>
        </Head>
        {/* <MetaHome /> */}
        <SliderHero sliderHero={sliderHero} />
        <SliderClient />
        <TemukanHome />
        <KaumDinamis product={product} />
        <StoreBisnis />
        <Perjalanan />
        <Layanan />
        <SliderAward awards={awards} />
        <MemberApps />
        <SliderTestimonial testimoni={testimoni} />
        <SliderEventRecap recaps={recaps} />
        <SliderBlog blogs={blogs} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const blogsRes = await fetch(
    `https://testrapi.bintangsempurna.co.id/api/blogs?populate=*`
  );
  const blogs = await blogsRes.json();
  // batas
  const recapRes = await fetch(
    `https://testrapi.bintangsempurna.co.id/api/recaps?populate=*`
  );
  const recaps = await recapRes.json();
  // batas
  const awardRes = await fetch(
    `https://testrapi.bintangsempurna.co.id/api/awards?populate=*`
  );
  const awards = await awardRes.json();
  // batas
  const testimonialRes = await fetch(
    `https://testrapi.bintangsempurna.co.id/api/testimonials?populate=*`
  );
  const testimoni = await testimonialRes.json();
  // batas
  const productRes = await fetch(
    `https://testrapi.bintangsempurna.co.id/api/services?populate=*`
  );
  const product = await productRes.json();
  // batas
  const heroRes = await fetch(
    `https://testrapi.bintangsempurna.co.id/api/sliders?populate=*`
  );
  const sliderHero = await heroRes.json();
  // batas
  return {
    props: {
      blogs,
      recaps,
      awards,
      testimoni,
      product,
      sliderHero,
    },
  };
}
