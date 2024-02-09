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

import { fetcher } from "@/lib/api";
import SliderBlog from "@/components/elements/AllSlider/SliderBlog";

const TRACKING_ID = "G-S1ZPP0X3DV";
ReactGA.initialize(TRACKING_ID);
ReactGA.send({ hitType: "pageview", page: "/" });

const inter = Inter({ subsets: ["latin"] });

export default function Home({ blogs }) {
  return (
    <>
      <div>
        <Head>
          <title>COBAIN</title>
        </Head>
        {/* <MetaHome /> */}
        <SliderHero />
        <SliderClient />
        <TemukanHome />
        <KaumDinamis />
        <StoreBisnis />
        <Perjalanan />
        <Layanan />
        <SliderAward />
        <MemberApps />
        <SliderTestimonial />
        <SliderEventRecap />
        <SliderBlog blogs={blogs} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const blogsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=*`
  );
  console.log(blogsResponse);
  return {
    props: {
      blogs: blogsResponse,
    },
  };
}
