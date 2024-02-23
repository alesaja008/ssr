import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "@/pages/insight/blog/styles.module.css";
import Image from "next/image";

const Blogs = () => {
  return (
    <>
      <section class="py-20">
        <Container>
          <Row>
            <Col lg={3} md={4} className="mb-3 col-6">
              <div className="box" style={{ cursor: "pointer" }}>
                <Image
                  className={style.recapArtic}
                  alt=""
                  src="https://testrapi.bintangsempurna.co.id/uploads/small_Sampel_Story_Book_8dc92e1b9c.jpg"
                  width={50}
                  height={50}
                />
                <h2 className={style.paragrafRecap}>
                  Bantal Custom untuk Sentuhan Pribadi dalam Dekorasi Ruang Anda
                </h2>
                <span className={style.categoryiconname__award}>category</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Blogs;
