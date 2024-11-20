import Image from "next/image";
import React from "react";
import AddProdectBtn from "./addProdectBtn";

const ProdectSingle = ({ data }) => {
  let description = data.product.description;
  //   console.log(description);

  return (
    <div>
      {data && (
        <div className="md:grid md:grid-cols-2  m-auto my-12 sm:gap-5">
          <div className="text-center m-auto bg-black/20">
            {" "}
            <Image
              src={data.product.image}
              alt="ProdectImage"
              width={500}
              height={500}
              className="m-auto"
            />
          </div>

          {/* tEXT  */}
          <div className=" mt-4 sm:mt-11">
            <h2 className="font-bold text-xl mb-3">{data.product.title}</h2>
            <p className="mb-4">
              description : {description.substring(0, 300)}
            </p>

            <p className="mb-1">
              {" "}
              Price : <span className="font-bold">${data.product.price}</span>
            </p>

            {/*  */}
            <AddProdectBtn data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProdectSingle;
