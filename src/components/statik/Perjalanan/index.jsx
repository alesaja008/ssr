import React from "react";
import { Container } from "react-bootstrap";
import ElipseSvg from "../../../assets/svg/elipse3.svg";
import StatikRedBs from "../../../assets/img/contentStatic/content_img5.png";
import Link from "next/link";
import ReactGA from "react-ga4";
import Image from "next/image";
import style from "../../../styles/Home.module.css";

const Perjalanan = () => {
  const handleEvents = () => {
    ReactGA.event({
      category: "about_category",
      action: "about_action",
      label: "about_label", // optional
      value: 99, // optional, must be a number
      nonInteraction: true, // optional, true/false
      transport: "xhr", // optional, beacon/xhr/image
    });
  };
  return (
    <>
      <section className="py-15">
        <Container>
          <Image
            src={ElipseSvg}
            className={style.roundEclipse2}
            alt="Elipsesvg"
          />
          <div className="container">
            <div className="row justify-content-start pt-10">
              <div className="col-md-6 col-12">
                <p
                  style={{ color: "#B30000" }}
                  className="eyebrow content-text-author_eyebrow text-left"
                >
                  PT. Bintang Sempurna
                </p>
                <h1 className="coodiv-text-5 font-weight-bold text-left">
                  Perjalanan Bintang Sempurna
                </h1>
                <div className="line-color-50%" />
                <p className="content_text_author_description_p">
                  Dimulai dari sebuah tempat fotokopi kini berkembang menjadi
                  salah satu percetakan inovatif dibangun bersama dengan Sumber
                  Daya Manusia yang memadai dan juga teknologi cetak terkini,
                </p>

                <div className={style.sendCTA}>
                  <Link
                    href="/profile/tentang-kami"
                    className="btn coodiv-text-11 mb-3 rounded-pill "
                    onClick={handleEvents}
                  >
                    Lihat Selengkapnya
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-12 d-flex align-items-center">
                <div className="content-text-author">
                  <div className="section_text_graphic_image">
                    <Image
                      src={StatikRedBs}
                      className="content-img-play"
                      alt=""
                      title=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Perjalanan;
