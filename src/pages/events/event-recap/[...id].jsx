import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { CiClock2 } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import Image from "next/image";
import style from "@/pages/insight/blog/styles.module.css";
import UpdateRecap from "@/components/UpdateContent/recapTerbaru";
import SliderEventRecap from "@/components/elements/AllSlider/SliderEventRecap";
import Head from "next/head";

export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.id[0];
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/recaps/${id}?populate=*`
  );
  const data = await res.json();

  const recapRes = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/recaps?populate=*"
  );
  const sliderRecap = await recapRes.json();

  // batas update recaps
  const latestRecapsRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/recaps?populate=*`
  );
  const latestRecapsData = await latestRecapsRes.json();

  return {
    props: {
      recaps: data,
      slider: sliderRecap,
      latestRecapsData,
    },
  };
}

const RecapDetails = ({ recaps, slider, latestRecapsData }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(recaps);

  const baseUrl = "https://testrapi.bintangsempurna.co.id/";

  return (
    <>
      <Head>
        <title>{recaps.data.attributes.title}</title>
        <meta name="title" content={recaps.data.attributes.title} />
        <meta
          name="description"
          content={recaps.data.attributes.SEO.description}
        />
        <meta
          property="og:image"
          content={`${baseUrl}${recaps.data.attributes.image.data.attributes.formats.small.url.substring(
            1
          )}`}
          id="og-image"
        ></meta>
      </Head>
      <section className="py-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              <div className="the_breadcrumb_conatiner_page">
                <div className="the_breadcrumb">
                  <div className="breadcrumbs">
                    events <FaAngleRight />
                    &nbsp;
                    <a
                      onClick={() => navigate("/events/event-recap")}
                      style={{
                        cursor: "pointer",
                        fontSize: "12px",
                      }}
                    >
                      events recap{" "}
                    </a>
                    <FaAngleRight /> {recaps.data.attributes.title}
                  </div>
                </div>
              </div>

              <div className="d-flex flex-row ">
                <div className="p-2 text-Published">
                  <h2 className="artikel-detail_tittle text-left">
                    {recaps.data.attributes.title}
                  </h2>
                </div>
              </div>

              <div className="d-flex flex-row ">
                <div className="text-Published">
                  <p className={style.date_now}>
                    {" "}
                    &nbsp; <CiClock2 /> &nbsp;
                    {new Date(
                      recaps.data.attributes.createdAt
                    ).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      weekday: "long", // Menambahkan hari
                    })}
                  </p>
                </div>
              </div>

              <div className="row mb-3">
                <div className="d-flex align-content-stretch flex-wrap">
                  <div className="HastagCategory">
                    {recaps.data.attributes.id_categories}
                  </div>
                </div>
              </div>

              <div className="d-flex flex-row mb-3">
                <div className="p-2 text-Published">Share :</div>
              </div>

              <div className="artikel-detail_hero">
                <Image
                  className="content-img-detail"
                  src={`${baseUrl}${recaps.data.attributes.image.data.attributes.formats.small.url.substring(
                    1
                  )}`}
                  loading="lazy"
                  alt={recaps.data.alt}
                  width={400}
                  height={400}
                />
              </div>
              <ReactMarkdown className="title___details text-left py-5">
                {recaps.data.attributes.description}
              </ReactMarkdown>
            </div>
            <div className="col-lg-4">
              <UpdateRecap latestRecaps={latestRecapsData.data} />
            </div>
          </div>
        </div>
      </section>
      <SliderEventRecap {...slider} />
    </>
  );
};

export default RecapDetails;
