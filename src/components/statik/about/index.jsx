import elipsSvg from "../../../assets/svg/elipse.svg";
import ownerImg from "../../../assets/svg/owner img.svg";
import imgCompany from "../../../assets/img/contentStatic/content_img5.png";
import elipsImg4 from "../../../assets/svg/elipse4.svg";
import companyBg from "../../../assets/img/contentStatic/company_bs.png";
import awardImg from "../../../assets/img/contentStatic/award_img.png";
import pialaAward from "../../../assets/img/contentStatic/icon-winner.png";
import logoOp from "../../../assets/img/contentStatic/logo_op.png";

// batas
import { Link } from "next/link";
import Image from "next/image";
import SliderClient from "@/components/elements/AllSlider/SliderClient";
import style from "@/components/statik/styles/styles.module.css";

const AboutBs = () => {
  return (
    <>
      <section className="py-5 pb-5 bg-white">
        <div className={style.roundedView} />
        <Image src={elipsSvg} alt="" className={style.homeAboutAhape} />
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-md-4 col-12 align-items-center">
              <div className="content-text-author mb-md-0 mb-14">
                <div className="section_text_graphic_image">
                  <Image src={ownerImg} alt="" title="" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="col-md-8 col-12 side-apps-details">
              <p
                style={{ color: "#E20613" }}
                className="eyebrow content-text-author_eyebrow"
              >
                PT. Bintang Sempurna
              </p>
              <h2 className="main-header-title coodiv-text-4 font-weight-bold">
                Lebih 30 Tahun Lebih Kami Melayani
              </h2>
              <div className="line-color-50%" />
              <p className="content_text_author_description_p">
                PT Bintang Sempurna adalah perusahaan printing dan document
                service yang berbasis di Jakarta, Indonesia, yang telah
                beroperasi selama 33 tahun. Didirikan sejak 1989, telah
                berkembang menjadi salah satu penyedia percetakan paling
                terpercaya di Indonesia.
              </p>
              <p className="content_text_author_description_p">
                PT Bintang Sempurna merupakan print service provider yang
                mempunyai solusi terintegrasi terkait pencetakan, dari ukuran
                reguler hingga format besar, baik digital maupun offset. Kami
                juga menawarkan layanan dokumen dan produk cetak dengan unique
                selling proposition, seperti:
              </p>
              <p className="content_text_author_description_p"></p>
              <li className="item-tittle">
                Personalisasi <span className="tittle-long">dan variasi</span>{" "}
              </li>
              <li className="item-tittle">
                Enhancements{" "}
                <span className="tittle-long">
                  Penggunaan media fancy &amp; tinta-tinta khusus
                </span>
              </li>
              <li className="item-tittle">
                Embellishments{" "}
                <span className="tittle-long">
                  Penambahan atribut finishing yang unik dan mewah
                </span>
              </li>
              <li className="item-tittle">
                Protections{" "}
                <span className="tittle-long">
                  Penambahan atribut untuk security dan autentifikasi produk
                </span>
              </li>
              <p />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 pb-5">
        <div className="container">
          <div className="row justify-content-start ">
            <div className="col-md-6 col-12 side-apps-details">
              <h2 className="main-header-title coodiv-text-4 font-weight-bold">
                Bagaimana Bintang Sempurna dimulai
              </h2>
              <div className="line-color-50%" />
              <p className="content_text_author_description_p">
                PT Bintang Sempurna berkembang dengan pesat selama tiga dekade
                terakhir, telah membuka tiga cabang; pada tahun 2005 (Hi-Q
                Printing), pada 2011 (Star Printing), dan Sempurna Palmerah
                (pada tahun 2016).
              </p>
            </div>
            <div className="col-md-6 col-12 side-apps-details">
              <div className="content-text-author">
                <div className="section_text_graphic_image">
                  <Image
                    src={imgCompany}
                    className="content-img-play mt-9"
                    alt=""
                    loading="lazy"
                    height={100}
                    width={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 pb-5">
        <Image src={elipsImg4} alt="" className={style.homeAboutShape4} />
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-md-5 col-12 d-flex align-items-center">
              <div className="content-text-author mb-md-0 mb-14">
                <div className="section_text_graphic_image">
                  <Image
                    src={companyBg}
                    className="img-vsmsi d-none d-lg-block d-print-block"
                    alt=""
                    title=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-7 col-12 side-apps-details">
              <h2 className="main-header-title coodiv-text-4 font-weight-bold">
                Visi
              </h2>
              <div className="line-color-50%" />
              <p className=" content_text_author_description_p">
                Menjadi perusahaan terkemuka di Indonesia dalam memberikan
                solusi percetakan dengan kualitas &amp; pelayanan terbaik
              </p>
              <h3 className="main-header-title coodiv-text-4 font-weight-bold">
                Misi
              </h3>
              <p className="content_text_author_description_p"></p>

              <li className="content_text_author_description_p">
                Mengembangkan sumber daya manusia yang kompeten &amp; terpercaya
              </li>
              <li className="content_text_author_description_p">
                Melayani pelanggan dengan sepenuh hati
              </li>
              <li className="content_text_author_description_p">
                Memiliki sistem dan prosedur untuk bekerja secara efektif dan
                efisien.
              </li>
              <li className="content_text_author_description_p">
                Bangun keterampilan kepemimpinan dan kerja tim yang solid
              </li>
              <li className="content_text_author_description_p">
                Memberikan keuntungan kepada pemangku kepentingan (pemilik,
                pelanggan, pemasok, karyawan, dan lingkungan).
              </li>

              <p />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 ">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-md-6 col-12 side-apps-details">
              <div className="content-text-author mb-md-0 mb-14">
                <h2 className="coodiv-text-4 font-weight-bold">
                  Penghargaan kami
                </h2>
                <div className="line-color-50%" />
                <p className="content_text_author_description_p">
                  43 Penghargaan Internasional untuk berbagai kategori di bidang
                  Printing
                </p>
                <ul className="list-unstyled">
                  <li className="media">
                    <Image
                      src={pialaAward}
                      className="mr-5 img-award"
                      alt=""
                      width={50}
                      height={50}
                    />
                    <div className="media-body">
                      <h5 className="mt-4 mb-1">10 Gold Award Winner</h5>
                    </div>
                  </li>
                  <li className="media my-4">
                    <Image
                      src={pialaAward}
                      className="mr-5 img-award"
                      alt=""
                      width={50}
                      height={50}
                    />
                    <div className="media-body">
                      <h5 className="mt-4 mb-1">5 Silver Award Winner</h5>
                    </div>
                  </li>
                  <li className="media">
                    <Image
                      src={pialaAward}
                      className="mr-5 img-award"
                      alt=""
                      width={50}
                      height={50}
                    />
                    <div className="media-body">
                      <h5 className="mt-4 mb-1">11 Bronze Award Winner</h5>
                    </div>
                  </li>
                </ul>

                {/* <Link href="" className="btn coodiv-text-11 mt-5 rounded-pill">
                  Lihat Selengkapnya
                </Link> */}
              </div>
            </div>

            <div className="col-md-6 col-12 mt-15">
              <div className="section_text_graphic_image">
                <Image src={awardImg} alt="" title="" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-default full-dekshrefp">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-md-4 col-12 mt-15">
              <div className="section_text_graphic_powered">
                <Image
                  src={logoOp}
                  className="icon-powered"
                  alt=""
                  title=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-md-8 col-12 align-items-center">
              <div className="content-text-author mb-md-0 mb-14">
                <h2 className="coodiv-text-4 font-weight-bold white-font side-apps-details">
                  Inovasi Teknologi Kami
                </h2>
                <div className="mt-3">
                  <ul className="coodiv-text-9 white-font">
                    <li>
                      <span className="text-bold">Personalisasi</span> dan
                      variasi
                    </li>
                    <li>
                      <span className="text-bold">Enhancements</span> :
                      Penggunaan media fancy, fleksibel maupun rigid &
                      tinta-tinta spesial
                    </li>
                    <li>
                      <span className="text-bold">Embellishments</span> :
                      Penambahan atribut finishing yang unik dan mewah
                    </li>
                    <li>
                      <span className="text-bold">Protections</span> :
                      Penambahan atribut untuk security dan autentifikasi produk
                    </li>
                  </ul>
                </div>

                <a
                  href="https://onlineprint.co.id/"
                  className="btn btn-light rounded-pill mt-10 submit-op"
                >
                  Lihat Inovasi Kami
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 our-pertners">
        <div className="container">
          <div className="content-text-author">
            <h2 className="coodiv-text-6 font-weight-bold ">Klient Kami</h2>
            <div className="line-color-100%-2grid mx-auhref" />
            <SliderClient />
          </div>
        </div>
      </section>

      
    </>
  );
};

export default AboutBs;
