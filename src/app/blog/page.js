// "use client";
import React from "react";
export const metadata = {
  title: "Blog - GM Abdou",
  description: "Protfio  - blog -  GM Abdou",
};
const Blog = () => {
  return (
    <>
      <div className=" mt-40 flex items-center justify-center">
        <div className="">
          <h1 className="font-bold text-5xl lg:text-9xl my-2 font-serif">
            {" "}
            Blog{" "}
          </h1>
        </div>
      </div>

      <div>
        {" "}
        <div className=" mt-16 grid sm:grid-cols-2 md:grid-cols-3 m-auto gap-3">
          {/* box  */}
          <div className="py-5 bg-white/10 rounded-lg px-5 ">
            <h4>Next.js 14 Latst UpDtae ... </h4>
            <i>
              <p className="mt-2 font-serif font-bold cursor-pointer  text-xs ">
                Lern Mor
              </p>
            </i>
          </div>

          <div className="py-5 bg-white/10 rounded-lg px-5 ">
            <h4>Next.js 14 Latst UpDtae ... </h4>
            <i>
              <p className="mt-2 font-serif font-bold cursor-pointer  text-xs ">
                Lern Mor
              </p>
            </i>
          </div>

          <div className="py-5 bg-white/10 rounded-lg px-5 ">
            <h4>Next.js 14 Latst UpDtae ... </h4>
            <i>
              <p className="mt-2 font-serif font-bold cursor-pointer  text-xs ">
                Lern Mor
              </p>
            </i>
          </div>

          <div className="py-5 bg-white/10 rounded-lg px-5 ">
            <h4>Next.js 14 Latst UpDtae ... </h4>
            <i>
              <p className="mt-2 font-serif font-bold cursor-pointer  text-xs ">
                Lern Mor
              </p>
            </i>
          </div>

          <div className="py-5 bg-white/10 rounded-lg px-5 ">
            <h4>Next.js 14 Latst UpDtae ... </h4>
            <i>
              <p className="mt-2 font-serif font-bold cursor-pointer  text-xs ">
                Lern Mor
              </p>
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
