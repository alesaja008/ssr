import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LogoOp from "../../../assets/svg/icon-op.svg";
import Image from "next/image";
import SliderProductOp from "@/components/elements/AllSlider/SliderProductOp";

const KaumDinamis = () => {
  return (
    <>
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <p
                style={{ color: "#B30000" }}
                className="eyebrow content-text-author_eyebrow text-left"
              >
                onlineprint.co.id
              </p>
              <h1 className="coodiv-text-5 font-weight-bold text-left">
                Cetak Praktis Buat Kaum Dinamis
              </h1>
              <div className="line-color-50%" />
              <p className="content_text_author_description_p">
                Cetak darimana saja, kapan saja dan apa saja yang Anda butuhkan
                di sini tanpa antri, Mulai mencetak kebutuhan Anda secara instan
                di onlineprint.co.id
              </p>
              <div className="row justify-content-center powered-by text-left">
                <div className="col-md-12">
                  <p
                    style={{ color: "#595959" }}
                    className="eyebrow content-text-author_eyebrow "
                  >
                    powered by :
                  </p>
                  <Image className="PoweredBy" src={LogoOp} alt="onlineprint" />
                </div>
              </div>
              <p className="text-left">
                <a
                  href="https://onlineprint.co.id/"
                  className="btn coodiv-text-11 mt-10 rounded-pill"
                >
                  Lihat Selengkapnya
                </a>
              </p>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <SliderProductOp />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default KaumDinamis;
