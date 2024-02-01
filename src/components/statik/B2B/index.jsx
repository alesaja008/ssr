import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import ImgRetail from "../../../assets/img/contentStatic/store.webp";
import ImgCorporation from "../../../assets/img/contentStatic/corporate.png";
import style from "../../../styles/Home.module.css";
import Image from "next/image";

const TabContent1 = ({ title, description, image }) => (
  <Row>
    <Col lg={6} xs={12}>
      <h2 className="coodiv-text-5 white-font text-left">{title}</h2>
      <div className="line-color-white50%"></div>
      <p className="content_text_author_description_p white-font">
        {description}
      </p>
      <ul className="list-retail">
        <li>
          <i>
            <FaCheckCircle />
          </i>{" "}
          Layanan Cepat
        </li>
        <li>
          <p className="content_text_author_description_p white-font pl-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </li>
        <hr></hr>
      </ul>
      <ul className="list-retail">
        <li>
          <i>
            <FaCheckCircle />
          </i>{" "}
          lengkap
        </li>
        <li>
          <p className="content_text_author_description_p white-font pl-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </li>
        <hr></hr>
      </ul>
      <ul className="list-retail">
        <li>
          <i>
            <FaCheckCircle />
          </i>{" "}
          Loyalty Points
        </li>
        <li>
          <p className="content_text_author_description_p white-font pl-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </li>
        <hr></hr>
      </ul>
      <div className={style.sendCTA}>
        <Button className="btn button-retail-b2b mt-10 rounded-pill ">
          Hubungi Sekarang
        </Button>
      </div>
    </Col>
    <Col lg={6} xs={12}>
      <div className="d-flex align-items-center">
        <div className="content-text-author mb-md-0 mb-14">
          <div className="section_text_graphic_image">
            <Image src={image} alt={`Image for ${title}`} />
          </div>
        </div>
      </div>
    </Col>
  </Row>
);

const TabContent2 = ({ title, description, image }) => (
  <Row>
    <Col lg={6} xs={12}>
      <h3 className="coodiv-text-5 white-font text-left">{title}</h3>
      <div className="line-color-white50%"></div>
      <p className="content_text_author_description_p white-font">
        {description}
      </p>
      <ul className="list-retail">
        <li>
          <i>
            <FaCheckCircle />
          </i>{" "}
          Layanan Cepat
        </li>
        <li>
          <p className="content_text_author_description_p white-font pl-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </li>
        <hr></hr>
      </ul>
      <div className={style.sendCTA}>
        <Button className="btn button-retail-b2b mt-10 rounded-pill">
          Hubungi Sekarang
        </Button>
      </div>
    </Col>
    <Col lg={6} xs={12}>
      <div className="d-flex align-items-center">
        <div className="content-text-author mb-md-0 mb-14">
          <div className="section_text_graphic_image">
            <Image src={image} alt={`Image for ${title}`} />
          </div>
        </div>
      </div>
    </Col>
  </Row>
);

const StoreBisnis = () => {
  const [activeButton, setActiveButton] = useState(1);

  const updateTabs = (id) => {
    setActiveButton(id);
  };
  return (
    <>
      <section className="bg-default-2 position-relative py-14">
        <h1 className="coodiv-text-5 text-center white-font">
          Kebutuhan Anda, Prioritas Kami
        </h1>
        <div className="d-flex justify-content-center">
          <div className={style.retailCorporate}>
            <Row>
              <Col>
                <Button
                  className={`btn-option ${activeButton === 1 ? "active" : ""}`}
                  onClick={() => updateTabs(1)}
                >
                  Retail
                </Button>
              </Col>
              <Col>
                <Button
                  className={`btn-option ${activeButton === 2 ? "active" : ""}`}
                  onClick={() => updateTabs(2)}
                >
                  B2B Corporate
                </Button>
              </Col>
            </Row>
          </div>
        </div>

        <Container>
          {activeButton === 1 && (
            <div className={style.showContent}>
              <TabContent1
                title="Lebih murah pastinya"
                description="Kamu bisa memesan produk secara cepat atau produk yang kamu buat sendiri."
                image={ImgRetail}
              />
            </div>
          )}

          {activeButton === 2 && (
            <div className={style.showContent}>
              <TabContent2
                title="Banyak Produknya Melimpah Untungnya"
                description="Kamu bisa memesan produk secara cepat atau produk yang kamu buat sendiri."
                image={ImgCorporation}
              />
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default StoreBisnis;
