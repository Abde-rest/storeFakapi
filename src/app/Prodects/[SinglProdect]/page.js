import React, { Suspense } from "react";
import GetsingleProdect from "./GetsingleProdect";

import ProdectSingle from "./ProdectSingle";
import LodingSingleProdect from "./LodingSingleProdect";
import Link from "next/link";

const page = async (prop) => {
  let id = prop.params.SinglProdect;

  let data = await GetsingleProdect(id);
  // console.log(data);

  return (
    
      <div className=" px-2 lg:px-20">
        <Link href={"/"}>Back Home </Link>
        <Suspense fallback={<LodingSingleProdect />}>
          <ProdectSingle data={data} />
        </Suspense>
      </div>
    
  );
};

export default page;
