import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import { getTestimonial } from "@/store/product/Services";
import { useDispatch, useSelector } from "react-redux";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import style from "@/styles/Home.module.css";

const SliderTestimonial = () => {
  const { entities, loading } = useSelector((state) => state.sliderTestimonial);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchApi = async () => {
      dispatch(getTestimonial());
    };

    fetchApi();
  }, [dispatch]);

  const baseUrl = "https://testrapi.bintangsempurna.co.id/";

  const renderTestimoni = () => {
    return entities.map((data) => {
      return (
        <SwiperSlide key={data.id}>
          <div className={style.testimonial}>
            <p className={style.testimonialText}>
              {data.attributes.description}
            </p>

            <div className={style.testimonialDetails}>
              <div className={style.testimonialImg}>
                <LazyLoadImage
                  src={`${baseUrl}${data.attributes.gambar.data.attributes.formats.thumbnail.url.substring(
                    1
                  )}`}
                  alt=""
                />
              </div>
              <div className={style.testimonialInfo}>
                <h4 className={style.testimonialName}>
                  {" "}
                  {data.attributes.title}
                </h4>
                <h5 className={style.testimonialJob}>
                  {data.attributes.Company}
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <>
      <section className={style.bgBack}>
        <div className="title-default-coodiv-four ">
          <h2 className="coodiv-text-4 font-weight-bold text-center">
            Apa Kata Mereka
          </h2>
          <div className="line-color-100%-2grid mx-auto"></div>
          <p className="content_text_author_description_p text-center ">
            bagiku PT. Bintang Sempurna
          </p>
        </div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2.1,
              spaceBetween: 10,
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
              slidesPerView: 4,
              spaceBetween: 5,
            },
            1400: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {renderTestimoni()}
        </Swiper>
      </section>
    </>
  );
};

export default SliderTestimonial;
