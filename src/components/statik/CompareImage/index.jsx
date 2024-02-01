import React from "react";
import arrowTop from "../../../assets/svg/arrow_top_fa.svg";
import arrowLeft from "../../../assets/svg/arrow_left_fa.svg";
import arrowRight from "../../../assets/svg/arrow_right_fa.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Image from "next/image";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import style from "../../../styles/Home.module.css";

const CompareImage = () => {
  return (
    <>
      <section>
        <h3 className={style.dragTitle}>
          Drag the cursor for{" "}
          <span className={style.ux_title}>Best Experience</span>
        </h3>

        <ReactCompareSlider
          aria-label="button drag"
          className={style.imageSlide}
          itemOne={
            <ReactCompareSliderImage
              rel="preload"
              as="image"
              srcSet="https://testrapi.bintangsempurna.co.id/uploads/cmyk_91b7270bd4_97afa142a9.webp"
              alt="Image one"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              rel="preload"
              as="image"
              srcSet="https://testrapi.bintangsempurna.co.id/uploads/UV_fadc6eceac_e25ab8fe21.webp"
              alt="Image two"
            />
          }
        />
        <div className={style.arrowTarget}>
          <div className="arrow-title">Lihat ini !!!</div>
          <Image rel="preload" src={arrowTop} alt="arrowTop" />
          <span className="visually-hidden">View more images</span>
        </div>
        <div className={style.arrowLeft}>
          <Image rel="preload" src={arrowLeft} alt="arrowLeft" />
          <div className="arrow-title">Cmyk</div>
          <span className="visually-hidden">View previous image</span>
        </div>
        <div className={style.arrowRight}>
          <Image rel="preload" src={arrowRight} alt="arrowRight" />
          <div className="arrow-title">Invisible Ink</div>
          <span className="visually-hidden">View next image</span>
        </div>
      </section>
    </>
  );
};

export default CompareImage;
