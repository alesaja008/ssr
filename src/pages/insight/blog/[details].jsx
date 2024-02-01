import React from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

import { useRouter } from "next/router";

const BlogsDetails = () => {
  const query = useRouter();
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <div className="mt-23">
        <h1>Blogs</h1>
        <p>Product : {query.details}</p>
      </div>
    </>
  );
};

export default BlogsDetails;
