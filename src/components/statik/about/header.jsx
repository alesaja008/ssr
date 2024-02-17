import VideoTentangKami from "@/components/modal/about";
import style from "@/components/statik/styles/styles.module.css";

const HeaderAbout = () => {
  return (
    <>
      <section
        className={`${style.bgHeaderAbout} padding-100-0`}
        data-parallax="scroll"
      >
        <div className="container text-center">
          <h2 className="font-weight-bold white-font all_about_bs">
            Bintang Sempurna adalah perusahaan percetakan yang berfokus pada
            inovasi dan kreatifitas. Maka berimajinasilah sebebas mungkin dan
            serahkan kebutuhan cetak Anda kepada yang berpengalaman semenjak
            tahun 1989 hingga saat ini. <br />
            Retail maupun bisnis, Kami Siap!
          </h2>

          <p className="coodiv-text-9 white-font all_about_paraf">
            Objektif: Menjadi pionir percetakan inovatif di Indonesia dengan
            terus menerobos perkembangan <br />
            jaman mempertahankan kualitas terbaik demi menyesuaikan kebutuhan
            cetak Anda.
          </p>
          <div className="video_about position-relative">
            <VideoTentangKami />
          </div>
          <h2 className="white-font pt-18">Lihat Kisah Kami</h2>
        </div>
      </section>
    </>
  );
};

export default HeaderAbout;
