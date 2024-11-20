"use client";
import { useStore } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  let { ListShoping, AllPrice } = useStore();

  return (
    <div className="mt-3">
      <Link href={"/"} className="bg-black p-2 font-bold text-white ">
        --- Back Home
      </Link>
      <h1 className="font-bold text-xl mt-5">Shoping List </h1>
      <div className=" flex  flex-col-reverse  md:flex-row  gap-3 mt-2">
        <div className="flex-grow max-h-56 overflow-y-scroll  shadow  ">
          {ListShoping.length === 0 ? (
            <div className="text-center p-2 bg-slate-300 font-bold  rounded">
              Ther is No Prodect Select{" "}
            </div>
          ) : (
            ListShoping.map((Prodect, index) => {
              let title = Prodect.title;
              return (
                <div
                  key={Prodect.id}
                  className="bg-sky-200/15 p-3  mt-2 flex items-center justify-between   mb-1">
                  <h1 className="font-bold   ">{++index}</h1>
                  <h1 className="font-bold text-black px-3">
                    {title.length > 50 ? title.slice(0, 50) + "..." : title}
                  </h1>
                  <h1 className="font-bold text-black">${Prodect.price}</h1>
                  <Image
                    src={Prodect.image}
                    alt="ImgProdect "
                    width={100}
                    height={100}
                  />
                </div>
              );
            })
          )}
        </div>
        <div className="md:w-96 bg-slate-300 p-2 md:h-11 flex items-center  justify-between md:block ">
          <h1 className="font-bold text-xl  text-black/60">
            Totle :<span className="mx-1">{AllPrice}$</span>
          </h1>

          <div className="md:text-end md:mt-4 text-start">
            <button className="bg-green-400 px-3 py-1 rounded shadow-md font-medium  ">
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
