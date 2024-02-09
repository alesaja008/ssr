import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Container, Card } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";
import style from "@/styles/Home.module.css";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "react-lazy-load-image-component/src/effects/blur.css";

import { fetcher } from "@/lib/api";
import useSWR from "swr";

const SliderBlog = ({ blogs }) => {
  console.log(blogs);
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=*`,
    fetcher,
    {
      fallbackData: blogs,
    }
  );

  const baseUrl = "https://testrapi.bintangsempurna.co.id";

  return (
    <section className="py-10">
      <Container>
        <div className="d-flex flex-row">
          <div className="p-2">
            <h2 className="coodiv-text-6 headline-art text-left">
              Blog Lainnya
            </h2>
          </div>
          <div className="p-2">
            <p className="text-right mt-2">
              <Link
                href="#"
                style={{ cursor: "pointer" }}
                className="text-danger font-weight-bold text-decoration"
              >
                Lihat Semua
              </Link>
            </p>
          </div>
        </div>

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
          <>
            {data &&
              data.data.map((data) => {
                return (
                  <SwiperSlide key={data.id}>
                    <Card
                      as={Link}
                      className={style.classCard}
                      href="#"
                      style={{ cursor: "pointer" }}
                    >
                      <LazyLoadImage
                        variant="top"
                        className="img___blog___art"
                        effect="blur"
                        src={`${baseUrl}${data.attributes.image.data.attributes.formats.large.url}`}
                        alt={data.attributes.title}
                      />

                      <Card.Body>
                        <span className={style.categoryIconBlog}>
                          {data.attributes.id_categories}
                        </span>
                        <Card.Title className="mt-3 text-left">
                          {data.attributes.title}
                        </Card.Title>
                        <Card.Text className="text-left">
                          {data.attributes.description}
                        </Card.Text>
                        <div className="text-left">
                          <span className={style.btnDetails}>
                            Baca Selengkapnya
                          </span>
                        </div>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                );
              })}
          </>
        </Swiper>
      </Container>
    </section>
  );
};

export default SliderBlog;
