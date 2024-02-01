import React from "react";
import Image from "next/image";
import ImgApps from "../../../assets/img/contentStatic/apps.png";
import PlayStoreImg from "../../../assets/svg/playstore.svg";
import IosImg from "../../../assets/svg/IOS.svg";

const MemberApps = () => {
  return (
    <>
      <section className="py-20 bg-default-2">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-sm detail-apps">
              <div className="heading-apps ">
                <h1 className="coodiv-text-4 white-font">
                  Untung Lebih Banyak <br />
                  Jadi Sobat Bintang
                </h1>
              </div>

              <div className="footer-apps-download">
                <p className="content_text_author_description_p white-font mt-5 text-center">
                  Member Sobat Bintang dapat diunduh di:
                </p>

                <div className="d-flex flex-nowrap justify-content-center">
                  <div className="order-3 p-1">
                    <a href="https://play.google.com/store/search?q=sobat%20bintang&c=apps&hl=id-ID">
                      <Image
                        className="IconDowloadApps"
                        src={PlayStoreImg}
                        alt="Playstore Image"
                      />
                    </a>
                  </div>
                  <div className="order-2 p-1">
                    <a href="https://apps.apple.com/id/app/sobat-bintang/id6443689098">
                      <Image
                        className="IconDowloadApps"
                        src={IosImg}
                        alt="IOS image"
                      />
                    </a>
                  </div>
                </div>

                <div className="notif-download">
                  <p className="content_text_author_description_p white-font text-center">
                    Download Sekarang dan Nikmati banyak keuntungan spesial
                    untuk kamu!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="img-apps">
                <Image
                  src={ImgApps}
                  className="apps-membership"
                  alt="member-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MemberApps;
