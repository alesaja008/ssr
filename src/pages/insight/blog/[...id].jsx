// import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "next/link";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import SliderBlog from "@/components/elements/AllSlider/SliderBlog";
import { CiClock2 } from "react-icons/ci";
import style from "@/pages/insight/blog/styles.module.css";

import Head from "next/head";
import UpdateBlog from "@/components/UpdateContent/blogTerbaru";

export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.id[0];
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}?populate=*`
  );
  const data = await res.json();

  const reqFeatured = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=*`
  );
  const sliderBlog = await reqFeatured.json();

  return {
    props: {
      blogs: data,
      slider: sliderBlog,
    },
  };
}

const BlogsDetails = ({ blogs, slider }) => {
  const router = useRouter();
  const { id } = router.query;

  const baseUrl = "https://testrapi.bintangsempurna.co.id/";

  return (
    <>
      <Head>
        <title>{blogs.data.attributes.title}</title>
        <meta name="title" content={blogs.data.attributes.title} />
        <meta
          name="description"
          content={blogs.data.attributes.SEO.description}
        />
        <meta
          property="og:image"
          content={`${baseUrl}${blogs.data.attributes.image.data.attributes.formats.small.url.substring(
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
                    <FaAngleRight /> {blogs.data.attributes.title}
                  </div>
                </div>
              </div>

              <div className="d-flex flex-row ">
                <div className="p-2 text-Published">
                  <h2 className="artikel-detail_tittle text-left">
                    {blogs.data.attributes.title}
                  </h2>
                </div>
              </div>

              <div className="d-flex flex-row ">
                <div className="text-Published">
                  <p className={style.date_now}>
                    {" "}
                    &nbsp; <CiClock2 /> &nbsp;
                    {new Date(
                      blogs.data.attributes.createdAt
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
                    #{blogs.data.attributes.title}
                  </div>
                  {/* <div className="HastagCategory">#Design Ideas</div>
                  <div className="HastagCategory">#Marketing & Promotion</div>
                  <div className="HastagCategory">#Whats New</div>
                  <div className="HastagCategory">#Tips n Trik</div>
                  <div className="HastagCategory">#Print Knowledge</div> */}
                </div>
              </div>

              <div className="d-flex flex-row mb-3">
                <div className="p-2 text-Published">Share :</div>
              </div>

              <div className="artikel-detail_hero">
                <Image
                  className="content-img-detail"
                  src={`${baseUrl}${blogs.data.attributes.image.data.attributes.formats.small.url.substring(
                    1
                  )}`}
                  loading="lazy"
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <ReactMarkdown className="title___details text-left py-5">
                {blogs.data.attributes.description}
              </ReactMarkdown>
            </div>
            <div className="col-lg-4">
              <UpdateBlog />
            </div>
          </div>
        </div>
      </section>

      <SliderBlog {...slider} />

      {/* <section className="blog-content-new mt-10 mb-10">
        <div className="article-body size-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-8"></div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default BlogsDetails;
