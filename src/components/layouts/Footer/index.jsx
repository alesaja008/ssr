import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import dowloadImg from "../../../assets/svg/apple-store x play store.svg";
import logoFooter from "../../../assets/svg/Logo_Bintang-Sempurna_white.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="footer-section">
      <Container>
        <div className="row mb-3">
          <div className="col-md-6 col-12">
            <p className="content_text_author_description_p white-font">
              Jl. Bendungan Hilir No.46, RT.8/RW.1, Bendungan Hilir Tanah Abang,
              Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10210
            </p>
          </div>
          <div className="col-md-6 col-12" />
        </div>
        <div className="row">
          <div className="col-md-9 col-12 quiq-links-footer">
            <div className="row justify-content-center">
              <div className="col-md-4 col-6">
                <h4 className="quiq-links-footer-title">Tentang Kami</h4>
                <ul className="quiq-links-footer-ul">
                  <li>
                    <Link href="/profile/tentang">Tentang</Link>
                  </li>
                  <li>
                    <Link href="https://onlineprint.co.id/">
                      Onlineprint.co.id
                    </Link>
                  </li>
                  <li>
                    <Link href="/insight/knowledge">Knowledge</Link>
                  </li>
                  <li>
                    <Link href="/insight/technology">Teknologi</Link>
                  </li>
                  <li>
                    <Link href="/events/recap">Event Recap</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-6">
                <h4 className="quiq-links-footer-title">Bantuan</h4>
                <ul className="quiq-links-footer-ul">
                  <li>
                    <Link href="">Kebijakan Privasi</Link>
                  </li>
                  <li>
                    <Link href="">Syarat Ketentuan</Link>
                  </li>
                  <li>
                    <Link href="/profile/hubungikami">Hubungi Kami</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-6"></div>
            </div>
          </div>

          <div className="col-md-3 col-12 row justify-content-between">
            <div className="secure-img-footer-area col-12 mb-10">
              <h2 className="quiq-links-footer-title">Member Sobat Bintang</h2>
              <Link
                href="https://play.google.com/store/search?q=sobat%20bintang&c=apps&hl=id-ID"
                aria-label="link"
              >
                <Image src={dowloadImg} alt="" />
              </Link>
              <span>Download Sekarang dan Dapatkan keuntungannya !!</span>
            </div>

            <div className="d-flex justify-content-md-star ">
              <span>Support center</span>
            </div>
            <div className="footer-contact-information d-flex flex-column col-6 col-12 mt-md-0 mt-8 text-left">
              <Link className="link-button" href="#">
                support@bintangsempurna.co.id
              </Link>
              <Link className="link-button" href="#">
                marketing@bintangsempurna.co.id
              </Link>
              <Link className="link-button" href="#">
                +62 811 9887 500
              </Link>
            </div>
          </div>
        </div>
        <div className=" row justify-content-between footer-area-under">
          <div className="col-md col-12 d-flex align-items-center">
            <Image className="footer-logo-blue" src={logoFooter} alt="" />
            <div className="footer-social-icons">
              <Link
                Link="link"
                className="icon-social"
                target="_blank"
                href="https://www.facebook.com/bintangsempurna/"
                aria-label="facebook"
              >
                <i>
                  <FaFacebook />
                </i>
              </Link>
              <Link
                className="icon-social"
                target="_blank"
                href="https://www.youtube.com/@bintangsempurna5051"
                aria-label="youtube"
              >
                <i>
                  <FaYoutube />
                </i>
              </Link>
              <Link
                className="icon-social"
                target="_blank"
                href="https://twitter.com/bisempurna46"
                aria-label="twitter"
              >
                <i>
                  <FaTwitter />
                </i>
              </Link>
              <Link
                className="icon-social"
                target="_blank"
                href="https://www.instagram.com/bisempurna46/"
                aria-label="instagram"
              >
                <i>
                  <FaInstagram />
                </i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-between final-footer-area mr-tp-40">
          <div className="col-md col-12">
            <div className="final-footer-area-text">
              <p className="section-subtitle mt-5 text-left">
                © {currentYear} | PT. Bintang Sempurna ©Copyright
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
