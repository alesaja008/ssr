import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Container, Card } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "react-lazy-load-image-component/src/effects/blur.css";

import styles from "@/components/elements/styles/style.module.css";

const SliderBlog = (props) => {
  const { data } = props;
  const baseUrl = "https://testrapi.bintangsempurna.co.id/";

  const renderBlog = () => {
    const sortedEntities = data.slice().sort((a, b) => b.id - a.id);
    const slicedEntities = sortedEntities.slice(5, 10);
    return (
      data &&
      slicedEntities.map((data) => {
        return (
          <SwiperSlide key={data.id}>
            <Card
              as={Link}
              className={styles.classCard}
              href={`/insight/blog/${data.id}/${data.attributes.slug}`}
              style={{ cursor: "pointer" }}
            >
              <Image
                variant="top"
                className={styles.imgBlogArt}
                effect="blur"
                src={`${baseUrl}${data.attributes.image.data.attributes.formats.large.url.substring(
                  1
                )}`}
                alt={data.attributes.title}
                width={500}
                height={300}
              />

              <Card.Body>
                <span className={styles.categoryIconBlog}>
                  {data.attributes.id_categories}
                </span>
                <Card.Title className="mt-3 text-left">
                  {data.attributes.title.slice(0, 50)}
                </Card.Title>
                <Card.Text className={styles.cardText}>
                  {data.attributes.description.slice(0, 50)}
                </Card.Text>
                <div className="text-left">
                  <span className={styles.btnDetails}>Baca Selengkapnya</span>
                </div>
              </Card.Body>
            </Card>
          </SwiperSlide>
        );
      })
    );
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
                href="/insight/blog/"
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
          <>{renderBlog()}</>
        </Swiper>
      </Container>
    </section>
  );
};

export default SliderBlog;
