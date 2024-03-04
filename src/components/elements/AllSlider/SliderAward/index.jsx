import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import { Container, Card } from "react-bootstrap";
import Link from "next/link";
import "react-lazy-load-image-component/src/effects/blur.css";
import Image from "next/image";
import awardIcon from "@/assets/img/svg/awardIcon.svg";
import styles from "@/components/elements/styles/style.module.css";

const SliderAward = ({ awards }) => {
  const { data } = awards;

  const baseUrl = "https://testrapi.bintangsempurna.co.id/";

  const renderAwards = () => {
    const sortedEntities = data.slice().sort((a, b) => b.id - a.id);
    const slicedEntities = sortedEntities.slice(0, 10);

    return slicedEntities.map((data) => {
      return (
        <SwiperSlide key={data.id}>
          <Card
            as={Link}
            className={styles.classCard}
            href={`/profile/award/${data.id}/${data.attributes.slug}`}
            style={{ cursor: "pointer" }}
          >
            <Image
              variant="top"
              className={styles.imgBlogArt}
              alt={data.attributes.title}
              src={`${baseUrl}${data.attributes.image.data.attributes.formats.small.url.substring(
                1
              )}`}
              effect="blur"
              width={500}
              height={300}
            />

            <Card.Body>
              <span className={styles.categoryIconAward}>
                {data.attributes.mode.data.attributes.title}
              </span>
              <Card.Title className="mt-3 text-left">
                {data.attributes.title.slice(0, 50)}
              </Card.Title>
              <Card.Text className={styles.cardText}>
                {data.attributes.description.slice(0, 50)}
              </Card.Text>
              <Card.Text className={styles.cardText}>
                The winner &nbsp;
                <Image src={awardIcon} alt="award" />
              </Card.Text>
              <div className="text-left">
                <span className={styles.btnDetails}>Baca Selengkapnya</span>
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
            {/* <SwiperSlide>1</SwiperSlide> */}
          </Swiper>
        </Container>
      </section>
    </>
  );
};

export default SliderAward;
