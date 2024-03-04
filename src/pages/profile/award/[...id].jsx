import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import ReactMarkdown from "react-markdown";
import { CiClock2 } from "react-icons/ci";
import style from "@/pages/insight/blog/styles.module.css";
import UpdateAward from "@/components/UpdateContent/awardTerbaru";

export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.id[0];
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/awards/${id}?populate=*`
  );
  const data = await res.json();

  return {
    props: {
      awards: data,
    },
  };
}

const AwardDetails = ({ awards }) => {
  const router = useRouter();
  const { id } = router.query;

  const baseUrl = "https://testrapi.bintangsempurna.co.id/";

  return (
    <>
      <section className="py-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              <div className="the_breadcrumb_conatiner_page">
                <div className="the_breadcrumb">
                  <div className="breadcrumbs">
                    insight <FaAngleRight />
                    &nbsp;
                    <a
                      onClick={() => navigate("/insight/blog")}
                      style={{
                        cursor: "pointer",
                        fontSize: "12px",
                      }}
                    >
                      Blog{" "}
                    </a>
                    <FaAngleRight /> {awards.data.attributes.title}
                  </div>
                </div>
              </div>

              <div className="d-flex flex-row ">
                <div className="p-2 text-Published">
                  <h2 className="artikel-detail_tittle text-left">
                    {awards.data.attributes.title}
                  </h2>
                </div>
              </div>

              <div className="d-flex flex-row ">
                <div className="text-Published">
                  <p className={style.date_now}>
                    {" "}
                    &nbsp; <CiClock2 /> &nbsp;
                    {new Date(
                      awards.data.attributes.createdAt
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
                  {/* {awards.data.attributes.categories.data.map((category) => (
                    <div className={category.attributes.slug} key={category.id}>
                      #{category.attributes.title}
                    </div>
                  ))} */}
                  <div className="HastagCategory">
                    {awards.data.attributes.mode.data.attributes.title}
                  </div>
                </div>
              </div>

              <div className="d-flex flex-row mb-3">
                <div className="p-2 text-Published">Share :</div>
              </div>

              <div className="artikel-detail_hero">
                <Image
                  className="content-img-detail"
                  src={`${baseUrl}${awards.data.attributes.image.data.attributes.formats.small.url.substring(
                    1
                  )}`}
                  loading="lazy"
                  alt={awards.data.alt}
                  width={400}
                  height={400}
                />
              </div>
              <ReactMarkdown className="title___details text-left py-5">
                {awards.data.attributes.description}
              </ReactMarkdown>
            </div>
            {/* batas */}
            <div className="col-lg-4">
              <UpdateAward />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AwardDetails;
