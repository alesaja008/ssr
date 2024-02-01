import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import { Container, Card, Button } from "react-bootstrap";
import { getProductOp } from "@/store/product/Services";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import style from "@/styles/Home.module.css";
import Image from "next/image";
import ChildOp from "@/assets/img/svg/iconChildOp.svg";

const SliderProductOp = () => {
  const { entities, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchApi = async () => {
      dispatch(getProductOp());
    };

    fetchApi();
  }, [dispatch]);

  const baseUrl = "https://testrapi.bintangsempurna.co.id/";

  const renderProduct = () => {
    return entities.map((data) => {
      return (
        <SwiperSlide key={data.id}>
          <Card
            as={Link}
            className={style.classCard}
            href={data.attributes.link}
            // onClick={() => blogDetail(data.id, data.attributes.slug)}
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
              <span className={style.categoryIconOP}>onlineprint</span>
              <Card.Title className="mt-3 text-left">
                {data.attributes.title}
              </Card.Title>
              <Card.Text className="text-left">
                {data.attributes.description}
              </Card.Text>
              <Card.Text className="text-left">
                produk pilihan &nbsp;
                <Image src={ChildOp} alt="childOp" />
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
      );
    });
  };

  return (
    <>
      <section>
        <Container>
          <Swiper
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2.1,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 1.1,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 1,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {/* <SwiperSlide>Slide 1</SwiperSlide> */}
            {renderProduct()}
          </Swiper>
        </Container>
      </section>
    </>
  );
};

export default SliderProductOp;
