import React, { Suspense } from "react";
import "@/app/globals.css";
import GetallProdect from "@/app/componet/GetData/GetallProdect";
import LodingImage from "./componet/GetData/LodingImage";

const page = async () => {
  return (
    <div>
      <div>
        <div>
          {" "}
          <h1 className="text-lg mt-20 border-b w-fit border-black">
            All view
          </h1>
        </div>

        {/* Her prodect  */}
        <div className="mt-8 block w-full">
          <Suspense fallback={<LodingImage />}>
            <GetallProdect />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default page;
