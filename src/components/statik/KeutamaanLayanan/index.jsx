import React from "react";
import ElipsNih from "../../../assets/svg/elipse4.svg";
import Talent1 from "../../../assets/img/contentStatic/icon_center1.png";
import Talent2 from "../../../assets/img/contentStatic/icon_center2.png";
import Talent3 from "../../../assets/img/contentStatic/icon_center3.png";
import Talent4 from "../../../assets/img/contentStatic/icon_center4.png";
import Image from "next/image";
import style from "../../../styles/Home.module.css";

const Layanan = () => {
  return (
    <>
      <section className="py-5 ">
        <Image src={ElipsNih} className={style.roundEclipse3} alt="elipse" />
        <div className="container">
          <h1 className="coodiv-text-5 font-weight-bold text-center">
            Keutamaan Layanan kami
          </h1>
          <div className="line-color-100%-2grid mx-auto" />
          <div className="row justify-content-center mt-10">
            <div className="col-md-3 col-6">
              <div className={style.serviceImage}>
                <Image
                  src={Talent1}
                  className="service-img mx-auto d-block"
                  alt=""
                  title=""
                  loading="lazy"
                />
                <div className="text">
                  <h2 className="coodiv-text-7 font-weight-bold text-center">
                    Hasil Akurat
                  </h2>
                  <p className="content_text_author_description_p text-center">
                    Kami sangat Fast respon untuk melayani anda
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className={style.serviceImage}>
                <Image
                  src={Talent2}
                  className="service-img mx-auto d-block"
                  alt=""
                  title=""
                  loading="lazy"
                />
                <div className="text">
                  <h2 className="coodiv-text-7 font-weight-bold text-center">
                    Aneka Material
                  </h2>
                  <p className="content_text_author_description_p text-center">
                    Produk berkualitas nomor satu dengan harga bersaing
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className={style.serviceImage}>
                <Image
                  src={Talent3}
                  className="service-img mx-auto d-block"
                  alt=""
                  title=""
                  loading="lazy"
                />
                <div className="text">
                  <h2 className="coodiv-text-7 font-weight-bold text-center">
                    Jaminan Garansi 100%
                  </h2>
                  <p className="content_text_author_description_p text-center">
                    Jika produk tidak sesuai pesanan diganti baru
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className={style.serviceImage}>
                <Image
                  src={Talent4}
                  className="service-img mx-auto d-block"
                  alt=""
                  title=""
                  loading="lazy"
                />
                <div className="text">
                  <h2 className="coodiv-text-7 font-weight-bold text-center">
                    Warna Variatif
                  </h2>
                  <p className="content_text_author_description_p text-center">
                    Pengiriman ke seluruh daerah di indonesia tanpa terkecuali
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Layanan;
