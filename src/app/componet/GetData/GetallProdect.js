// "use client"
// import Image from "next/image";
import React, { Suspense } from "react";
import "@/app/globals.css";
import ImageUi from "./ImageUi";
import LodingImage from "./LodingImage";

const GetallProdect = async () => {
  let res = await fetch("https://fakestoreapi.in/api/products", {
    cache: "no-store",
  });

  let data = await res.json();
  // console.log(data.products);

  return (
    // className=" ">
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-4">
        {data &&
          data.products.map((prodect, index) => {
            return (
              <div key={index}>
                {/* <Image
                  src={prodect.image}
                  alt="imgProdecr"
                  width={300}
                  height={400}
                  // placeholder="blur"
                  // blurDataURL="public/blur.avif"
                /> */}
                {/* <Suspense fallback={<LodingImage />}> */}
                {/* <Suspense fallback={}> */}
                <ImageUi src={prodect.image} width={300} height={400} />
                {/* </Suspense> */}
                {/* </Suspense> */}
                <p className=" text-sm mt-2">
                  {prodect.title.length <= 30
                    ? prodect.title
                    : prodect.title.substr(0, 30)}{" "}
                </p>

                <p className="mt-1  ">${prodect.price}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GetallProdect;
