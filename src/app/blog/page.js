import React, { Suspense } from "react";
import DataBlog from "./DataBlog";
import LodingUi from "@/app/blog/lodingUi";
const Blog = () => {
  //   const DataComponent = React.lazy(() => import("./DataBlog"));
  return (
    <div>
      <h1 className="text-3xl mt-10 pl-10 inline-block">Blog Latst</h1>
      <i>
        {" "}
        <span className="text-xs border-b border-white ">Test Streming</span>
      </i>
      <div className="mt-5 ">
        <Suspense fallback={<LodingUi />}>
          <DataBlog />
        </Suspense>
      </div>
    </div>
  );
};

export default Blog;
