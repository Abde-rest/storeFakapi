import React from "react";
import "@/app/globals.css";
import ImageUi from "./ImageUi";
import Link from "next/link";

const GetallProdect = async () => {
  let data;
  let res = await fetch("https://fakestoreapi.in/api/products?limit=12", {
    next: { revalidate: 10 },

    // No stor
  });

  if (res.ok) {
    data = await res.json();
  }

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4  lg:grid-cols-6 gap-4">
        {data &&
          data.products.map((prodect) => {
            return (
              <Link key={prodect.id} href={`/Prodects/${prodect.id}`}>
                <div>
                  <div className="bg-slate-400/20">
                    <ImageUi src={prodect.image} width={300} height={400} />
                  </div>

                  <p className=" text-sm mt-2">
                    {prodect.title.length <= 30
                      ? prodect.title
                      : prodect.title.substr(0, 30)}{" "}
                  </p>

                  <p className="mt-1  ">${prodect.price}</p>
                </div>
              </Link>
            );
          })}
      </div>
      {data ? null : <div className="text-center">Ther is Problem </div>}
    </div>
  );
};

export default GetallProdect;
