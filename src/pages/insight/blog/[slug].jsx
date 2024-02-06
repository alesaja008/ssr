import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { useRouter } from "next/router";
import { Link } from "next/link";
import BlogSlider from "@/components/elements/AllSlider/SliderBlog";

const BlogsDetails = () => {
  const query = useRouter();

  return (
    <>
      <section className="py-20">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-1"></div> */}
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
                    <FaAngleRight /> Membership Untung Lebih Banyak, Pelanggan
                    Makin Luas
                  </div>
                </div>
              </div>

              <div className="d-flex flex-row ">
                <div className="p-2 text-Published">
                  <h2 className="artikel-detail_tittle text-left">
                    Membership Untung Lebih Banyak, Pelanggan Makin Luas
                  </h2>
                </div>
              </div>

              <div className="d-flex flex-row mb-3">
                <div className="p-2 text-Published">
                  Published on 20 Juli 2023
                </div>
              </div>

              <div className="row mb-3">
                <div class="d-flex align-content-stretch flex-wrap">
                  <div className="HastagCategory">#Inspiration</div>
                  <div className="HastagCategory">#Design Ideas</div>
                  <div className="HastagCategory">#Marketing & Promotion</div>
                  <div className="HastagCategory">#Whats New</div>
                  <div className="HastagCategory">#Tips n Trik</div>
                  <div className="HastagCategory">#Print Knowledge</div>
                </div>
              </div>

              <div className="d-flex flex-row mb-3">
                <div className="p-2 text-Published">Share :</div>
              </div>

              <div className="artikel-detail_hero">
                <Image
                  className="content-img-detail"
                  src="https://testrapi.bintangsempurna.co.id/uploads/large_membership_login_web_banner_f3b4a40b29.jpg"
                  loading="lazy"
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <p className="title___details text-left py-5">
                Program membership merupakan salah satu strategi marketing untuk
                menarik dan mempertahankan konsumen. Konsumen biasanya juga suka
                dengan program membership. Dengan memiliki kartu member,
                konsumen akan mendapat lebih banyak keuntungan dan berbagai
                promo. Baca Juga: Ada 3 Jenis Member Card Beserta Keuntungannya.
                Punya Anda yang Mana Nih? Lalu apa untungnya bagi perusahaan
                membuat program membership? Sekilas memang kelihatan hanya
                menguntungkan konsumen. Mereka yang pegang member card akan
                dapat diskon lebih banyak, poin dan lain sebagainya sesuai
                dengan kebijakan program. Tapi kalau dicermati lebih dalam,
                program member sangat menguntungkan bagi Perusahaan.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="NewsRelease_section py-10">
                <h1 className="artikel-detail_tittle text-left">
                  Update terbaru
                </h1>
                <hr />
                {/* batas */}
                <div className="cardRelease mb-3">
                  <div class="d-flex align-items-center m-3">
                    <div class="flex-shrink-0">
                      <Image
                        className="newUpdate"
                        src="https://testrapi.bintangsempurna.co.id/uploads/small_TUMBLER_b02d48a137.png"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                    <div class="flex-grow-1 ms-3 text-left">
                      <h2 className=" text_news">
                        Botol Minum Tumbler: Souvenir Populer Bisnis, Sudah
                        Punya Belum?
                      </h2>
                      <div className="d-flex flex-row mb-3">
                        <div className="p-2 text-Published">
                          Published on 20 Juli 2023
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* batas */}
              <h2 className="artikel-detail_tittle text-left">
                Temukan berdasarkan topik
              </h2>
              <hr />
              <div className="row mb-3">
                <div class="d-flex align-content-stretch flex-wrap">
                  <div className="TopikCategory">Inspiration</div>
                  <div className="TopikCategory">Design Ideas</div>
                  <div className="TopikCategory">Marketing & Promotion</div>
                  <div className="TopikCategory">Whats New</div>
                  <div className="TopikCategory">Tips n Trik</div>
                  <div className="TopikCategory">Print Knowledge</div>
                </div>
              </div>
              {/* batas */}
            </div>
          </div>
        </div>
      </section>

      <section className="blog-content-new mt-10 mb-10">
        <div className="article-body size-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-8"></div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </div>
      </section>

      <BlogSlider />
    </>
  );
};

export default BlogsDetails;
