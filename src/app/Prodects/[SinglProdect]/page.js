import React, { Suspense } from "react";
import GetsingleProdect from "./GetsingleProdect";
import { IoMdArrowRoundBack } from "react-icons/io";
import ProdectSingle from "./ProdectSingle";
import LodingSingleProdect from "./LodingSingleProdect";
import Link from "next/link";

const page = async (prop) => {
  let id = prop.params.SinglProdect;

  let data = await GetsingleProdect(id);
  // console.log(data);

  return (
    <div className=" mt-2 px-2 lg:px-20">
      {/* Back Home  */}
      <Link
        className=" flex items-center gap-1 font-bold bg-slate-100 w-fit p-2  mt-4"
        href={"/"}>
        <IoMdArrowRoundBack className="text-2xl" />
        Back Home
      </Link>

      <Suspense fallback={<LodingSingleProdect />}>
        <ProdectSingle data={data} />
      </Suspense>
    </div>
  );
};

export default page;
