import React from "react";
import Image from "next/image";

export async function getServerSideProps() {
  const reqFeatured = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=*`
  );
  const updateBlog = await reqFeatured.json();

  return {
    props: {
      updateBlogs: updateBlog,
    },
  };
}

const UpdateBlog = ({ updateBlogs }) => {
  console.log(updateBlogs);

  return (
    <>
      <div className="NewsRelease_section py-10">
        <h1 className="artikel-detail_tittle text-left">Update terbaru</h1>
        <hr />
        {/* batas */}
        <div className="cardRelease mb-3">
          <div className="d-flex align-items-center m-3">
            <div className="flex-shrink-0">
              <Image
                className="newUpdate"
                src="https://testrapi.bintangsempurna.co.id/uploads/small_TUMBLER_b02d48a137.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div className="flex-grow-1 ms-3 text-left">
              <h2 className=" text_news">
                Botol Minum Tumbler: Souvenir Populer Bisnis, Sudah Punya Belum?
              </h2>
              <div className="d-flex flex-row mb-3">
                <div className="p-2 text-Published">
                  Published on 20 Juli 2023
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* batas */}
        <h2 className="artikel-detail_tittle text-left">
          Temukan berdasarkan topik
        </h2>
        <hr />
        <div className="row mb-3">
          <div className="d-flex align-content-stretch flex-wrap">
            <div className="TopikCategory">Inspiration</div>
            <div className="TopikCategory">Design Ideas</div>
            <div className="TopikCategory">Marketing & Promotion</div>
            <div className="TopikCategory">Whats New</div>
            <div className="TopikCategory">Tips n Trik</div>
            <div className="TopikCategory">Print Knowledge</div>
          </div>
        </div>
      </div>
      {/* batas */}
    </>
  );
};

export default UpdateBlog;
