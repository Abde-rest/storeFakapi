// "use client";

import Image from "next/image";
import React from "react";
// import LodingImage from "./LodingImage";

const ImageUi = (prop) => {
  // console.log(prop);

  // let [islodiing, setisloding] = useState(true);
  // let handelLoding = () => {
  //   setisloding(!islodiing);
  //   console.log("yes");
  // };

  return (
    <div>
      {/* {islodiing ? (
        <LodingImage />
      ) : ( */}
      <Image
        src={prop.src}
        width={prop.width}
        height={prop.height}
        alt="ImageProdect "
      />
      {/* )} */}
    </div>
  );
};

export default ImageUi;
