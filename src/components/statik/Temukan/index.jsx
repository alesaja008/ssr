import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import svgStatic1 from "../../../assets/svg/elipse.svg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import styles from "../../../styles/Home.module.css";
import CompareImage from "../CompareImage";
import Link from "next/link";
// import ReactGA from "react-ga4";

const TemukanHome = () => {
  const [text] = useTypewriter({
    words: [" Solusi ", " Teknologi ", " Material ", " Warna ", " Kualitas "],
    loop: 0,
  });

  const onClick = () => {
    ReactGA.event({
      category: "product_category",
      action: "product_action",
      label: "product_label", // optional
      value: 99, // optional, must be a number
      nonInteraction: true, // optional, true/false
      transport: "xhr", // optional, beacon/xhr/image
    });
  };

  return (
    <>
      <section className="py-10">
        <Container>
          <Image
            src={svgStatic1}
            className={styles.roundEclipse}
            alt="circle image"
          />
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h1 className="coodiv-text-6 font-weight-bold text-left">
                Temukan <span className={styles.text__loop}>{text}</span>
                <span style={{ color: "red" }}>
                  <Cursor cursorStyle="|" />
                </span>
              </h1>
              <h2 className="coodiv-text-5 font-weight-bold text-left">
                Untuk Hasil Cetak Yang Lebih Menarik
              </h2>

              <div className="line-color-100%-2grid "></div>
              {/* <div className="line-color-50% "></div> */}
              <p className="content_text_author_description_p ">
                Jadilah yang lebih tahu solusi cetak maksimal dengan teknologi
                printing terkini di setiap kebutuhan Anda.
              </p>

              {/* Menggunakan Link untuk navigasi */}
              <p className="text-left">
                <Link
                  href="/product"
                  className="btn coodiv-text-11 mt-10 rounded-pill mb-5"
                  onClick={onClick}
                >
                  Lihat Selengkapnya
                </Link>
              </p>
            </Col>

            <div className="col-lg-6 col-md-6 col-12">
              <CompareImage />
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TemukanHome;
