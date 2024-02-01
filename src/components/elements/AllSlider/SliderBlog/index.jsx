import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Container, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getBlogSlider } from "@/store/product/Services";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";
import style from "@/styles/Home.module.css";

const BlogSlider = () => {
  const { entities, loading } = useSelector((state) => state.sliderBlog);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchApi = async () => {
      dispatch(getBlogSlider());
    };

    fetchApi();
  }, [dispatch]);

  const baseUrl = "https://testrapi.bintangsempurna.co.id/";

  const renderBlog = () => {
    const sortedEntities = entities.slice().sort((a, b) => b.id - a.id);
    const slicedEntities = sortedEntities.slice(0, 10);

    return slicedEntities.map((data) => (
      <SwiperSlide key={data.id}>
        <Card
          as={Link}
          className={style.classCard}
          href={`/insight/blog/${data.id}`}
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
            <span className={style.categoryIconBlog}>
              {data.attributes.mode.data.attributes.title}
            </span>
            <Card.Title className="mt-3 text-left">
              {data.attributes.title}
            </Card.Title>
            <Card.Text className="text-left">
              {data.attributes.description}
            </Card.Text>
            <div className="text-left">
              <span className={style.btnDetails}>Baca Selengkapnya</span>
            </div>
          </Card.Body>
        </Card>
      </SwiperSlide>
    ));
  };

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
                href=""
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
          {renderBlog()}
        </Swiper>
      </Container>
    </section>
  );
};

export default BlogSlider;
