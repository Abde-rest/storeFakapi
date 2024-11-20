"use client";

import Image from "next/image";
import React from "react";

const ImageUi = (prop) => {
  return (
    <div>
      <Image
        src={prop.src}
        alt="ImageProdect "
        width={prop.width}
        height={prop.height}
        // Trak one Use the onlodincomplet with css is use

        // className="opacity-0 transition-opacity"
        // onLoadingComplete={(image) => {
        //   image.classList.remove("opacity-0");
        // }}

        // style={{
        //   filter: "blur(5px)",
        // }}
        // className={
        //   islodiing ? "transition  " : "blurfilter transition max-w-96 max-h-80"
        // }
        // onLoadingComplete={handelLoding}
        // placeholder="blur"
        // blurDataURL="@/app/public/blur.avif"
      />
    </div>
  );
};

export default ImageUi;
