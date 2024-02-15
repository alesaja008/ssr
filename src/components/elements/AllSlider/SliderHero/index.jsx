import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { getSliderHero } from "@/store/product/Services";
import { useDispatch, useSelector } from "react-redux";

import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "next/image";

const SliderHero = ({ sliderHero }) => {
  const { data } = sliderHero;
  // const { entities, loading } = useSelector((state) => state.sliderHero);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     dispatch(getSliderHero());
  //   };

  //   fetchApi();
  // }, [dispatch]);

  const baseUrl = "https://testrapi.bintangsempurna.co.id";

  return (
    <section className="mt-20">
      <div className="container">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
              spaceBetween: 5,
            },
            481: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            769: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((data) => (
            <SwiperSlide key={data.id}>
              <a href={data.attributes.url}>
                <Image
                  className="imgHeroBanner "
                  effect="blur"
                  src={`${baseUrl}${data.attributes.image.data.attributes.formats.large.url}`}
                  alt={data.attributes.alt}
                  url={data.attributes.url}
                  width={500}
                  height={300}
                />
                {/* <LazyLoadImage
                  className="imgHeroBanner d-block d-sm-none"
                  effect="blur"
                  src={`${baseUrl}${data.attributes.mobile.data.attributes.formats.medium.url}`}
                  url={data.attributes.url}
                  alt={data.attributes.alt}
                /> */}
              </a>
            </SwiperSlide>
          ))}
          <div className="swiper-nav-btns"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default SliderHero;
