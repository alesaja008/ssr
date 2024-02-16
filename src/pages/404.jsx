import React from "react";
import notFoundImg from "../assets/svg/notFound.svg";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <section className="full__Wide_notfound">
        <div className="container">
          <div className="row justify-content-center ">
            <Image className="notFound__img" src={notFoundImg} alt="" />
            <div className="Content_title">
              <h3 className="text-center title__h">
                Ooups, tujuanmu nggak ada!
              </h3>
              <p className="text-center title__p">
                Mungkin kamu salah jalan atau alamat. Ayo cari ulang!
              </p>
              <Link className="btn coodiv-text-11 mt-10 rounded-pill" href="/">
                Kembali sebelum hujan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
