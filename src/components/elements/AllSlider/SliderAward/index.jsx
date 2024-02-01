import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import { Container, Row, Card } from "react-bootstrap";
import Link from "next/link";
import { getAwards } from "@/store/product/Services";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import style from "@/styles/Home.module.css";
import Image from "next/image";
import awardIcon from "@/assets/img/svg/awardIcon.svg";

const SliderAward = () => {
  const { entities, loading } = useSelector((state) => state.awardsAll);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchApi = async () => {
      dispatch(getAwards());
    };

    fetchApi();
  }, [dispatch]);

  const baseUrl = "https://testrapi.bintangsempurna.co.id/";

  const renderAwards = () => {
    return entities.map((data) => {
      return (
        <SwiperSlide key={data.id}>
          <Card
            as={Link}
            className={style.classCard}
            href={data.attributes.slug}
            style={{ cursor: "pointer" }}
          >
            <LazyLoadImage
              variant="top"
              className="img___blog___art"
              alt={data.attributes.title}
              src={`${baseUrl}${data.attributes.image.data.attributes.formats.small.url.substring(
                1
              )}`}
              effect="blur"
            />

            <Card.Body>
              <span className={style.categoryIconAward}>
                {data.attributes.mode.data.attributes.title}
              </span>
              <Card.Title className="mt-3 text-left">
                {data.attributes.title}
              </Card.Title>
              <Card.Text className="text-left">
                {data.attributes.description}
              </Card.Text>
              <Card.Text className="text-left">
                The winner &nbsp;
                <Image src={awardIcon} alt="award" />
              </Card.Text>
              <div className="text-left">
                <span className={style.btnDetails}>Baca Selengkapnya</span>
              </div>
            </Card.Body>
          </Card>
        </SwiperSlide>
      );
    });
  };

  return (
    <>
      <section className="py-10">
        <Container>
          {/* batas */}
          <div className="col-md-12 col-12">
            <div className="title-default-coodiv-four">
              <h2 className="coodiv-text-4 font-weight-bold text-center">
                Prestasi kami
              </h2>
              <div className="line-color-100%-2grid mx-auto" />
              <p className="content_text_author_description_p text-center ">
                Menjadi yang terpercaya, berawal dari proses yang tidak mudah.
                Berikut beberapa prestasi Bintang Sempurna dalam menyediakan
                solusi cetak yang inovatif dan kreatif standar mancanegara.
                Beberapa diantaranya ialah HP Award juga Fedrigoni Award .
              </p>
            </div>
          </div>
          <div className="d-flex flex-row">
            <div className="p-2">
              <h2 className="coodiv-text-6 headline-art text-left">
                Prestasi Lainnya
              </h2>
            </div>
            <div className="p-2">
              <p className="text-right mt-2">
                <Link
                  href=""
                  style={{ cursor: "pointer" }}
                  className="text-danger font-weight-bold text-decoration"
                >
                  Lihat Semua
                </Link>
              </p>
            </div>
          </div>
          {/* batas */}
          <Swiper
            slidesPerView={1}
            breakpoints={{
              320: {
                slidesPerView: 2.1,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 5,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {renderAwards()}
          </Swiper>
        </Container>
      </section>
    </>
  );
};

export default SliderAward;
