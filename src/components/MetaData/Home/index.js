import React from "react";
import Head from "next/head";

const MetaHome = () => {
  return (
    <>
      <Head>
        <title>
          Bintang Sempurna | Printing Terlengkap, Cepat dan Berkualitas
        </title>
        <meta
          property="og:image"
          content="https://testrapi.bintangsempurna.co.id/uploads/Preview_f266a66436.jpg"
          id="og-image"
        />
        <link
          rel="canonical"
          href="https://bintangsempurna.co.id/ "
          data-rh="true"
        ></link>

        <meta
          name="viewport"
          content="initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=no, width=device-width"
        ></meta>

        <meta
          name="title"
          content="Bintang Sempurna | Printing Terlengkap, Cepat dan Berkualitas "
        />
        <meta
          name="description"
          content="Jadilah yang lebih tahu solusi cetak maksimal dengan teknologi printing terkini di setiap kebutuhan Anda."
        />

        {/* <!-- fb & Whatsapp --> */}
        {/* <meta
            property="og:url"
            content={`${baseUrl}insight/blog/${data.id}?populate=${metaSlug}`}
          /> */}
        <meta
          property="og:title"
          content="Bintang Sempurna | Printing Terlengkap, Cepat dan Berkualitas "
        />
        <meta
          property="og:description"
          content="Jadilah yang lebih tahu solusi cetak maksimal dengan teknologi printing terkini di setiap kebutuhan Anda."
        />
        <meta
          property="og:image"
          content="https://testrapi.bintangsempurna.co.id/uploads/Preview_f266a66436.jpg"
        />
        <meta property="og:site_name" content="Bintang Sempurna" />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="bintangsempurna.co.id" />
        <meta
          property="twitter:title"
          content="Bintang Sempurna | Printing Terlengkap, Cepat dan Berkualitas"
        />
        <meta
          property="twitter:description"
          content="Jadilah yang lebih tahu solusi cetak maksimal dengan teknologi printing terkini di setiap kebutuhan Anda."
        />
        <meta
          property="twitter:image"
          content="https://testrapi.bintangsempurna.co.id/uploads/Preview_f266a66436.jpg"
        />

        {/* google */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        ></meta>
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="googlebot" content="notranslate" />
        <meta name="google" content="nopagereadaloud" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
};

export default MetaHome;
