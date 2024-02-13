import SliderBlog from "@/components/elements/AllSlider/SliderBlog";
import React from "react";

const Blogs = ({ blogs }) => {
  return (
    <>
      <div className="mt-23">Blogs</div>
      <SliderBlog blogs={blogs} />
    </>
  );
};

export default Blogs;

export async function getServerSideProps() {
  const blogRes = await fetch(
    `https://testrapi.bintangsempurna.co.id/api/blogs?populate=*`
  );
  const blogs = await blogRes.json();

  return {
    props: {
      blogs,
    },
  };
}
