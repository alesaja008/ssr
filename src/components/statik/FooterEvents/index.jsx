import React from "react";
import { Container } from "react-bootstrap";
import imgFooterEvent from "../../../assets/img/contentStatic/image_footer.webp";
import Link from "next/link";
import Image from "next/image";

const FooterEvents = () => {
  return (
    <>
      <section className="footer-section-banner">
        <Container>
          <div className="row">
            <div className="col-sm pt-15 ">
              <h2 className="coodiv-text-3 white-font text-left">
                Events Kami
              </h2>
              <h3 className="free-trial-footer-banner-title text-left">
                Ayo . . ! Mulai untuk mengetahui dunia Printing
              </h3>
              <p className="content_text_author_description_p white-font mt-5 text-left mb-10">
                Berpartisipasi dalam QnA, ikuti berita Printing, dan diskusikan
                dengan para ahli di PT. Bintang Sempurna Events ini.
              </p>

              <p className="text-left">
                <Link
                  href="/events/now"
                  className="btn btn-light rounded-pill shadow-sm coodiv-text-11 mb-10  "
                >
                  Selengkapnya
                </Link>
              </p>
            </div>
            <div className="col-sm">
              <div className="Footer_image">
                <Image
                  className="Footer_image"
                  src={imgFooterEvent}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FooterEvents;
