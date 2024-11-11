import Link from "next/link";
import React, { Suspense } from "react";
import "@/app/globals.css";
import GetallProdect from "@/app/componet/GetData/GetallProdect";
import LodingImage from "./componet/GetData/LodingImage";
// import LodingImage from "@/componet/GetData/LodingImage";

const page = () => {
  return (
    <div>
      <h1 className="text-center p-1 bg-black text-white">
        FREE SHIPPING ON ORDERS OVER 15000dz
      </h1>
      <div className="container m-auto px-3 lg:px-7 ">
        <header className="flex items-center justify-between mt-7">
          <nav className="flex gap-7 items-center ">
            <Link className=" " href={"/Auth"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={20}
                height={20}
                color={"#000000"}
                fill={"none"}>
                <path
                  d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </Link>
            <Link className=" " href={"/Auth"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={20}
                height={20}
                color={"#000000"}
                fill={"none"}>
                <path
                  d="M17.5 17.5L22 22"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              className="before:top-0 before:right-0  before:absolute before:w-1 before:contents('') before:h-2 before:bg-black "
              href={"/Auth"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={20}
                height={20}
                color={"#000000"}
                fill={"none"}>
                <path
                  d="M3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L20.1271 17.0194C19.7282 19.3991 19.5287 20.5889 18.7143 21.2945C17.9 22 16.726 22 14.3782 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </Link>
          </nav>

          <nav className="flex items-center ">
            {" "}
            <Link
              className="text-sm p-2 relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-black/80 hover:before:w-full before:transition-all"
              href={"/"}>
              Home
            </Link>
            <Link
              className="text-sm p-2 relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-black/80  hover:before:w-full before:transition-all"
              href={"/About"}>
              All view
            </Link>
            <Link
              className="text-sm p-2 relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-black/80  hover:before:w-full before:transition-all"
              href={"/blog"}>
              About us
            </Link>
          </nav>
        </header>
        <div>
          {" "}
          <h1 className="text-lg mt-20 border-b w-fit border-black">
            All view
          </h1>
        </div>

        {/* Her prodect  */}
        <div className="mt-8 block w-full">
         <Suspense fallback={<LodingImage/>}>
         <GetallProdect />
         </Suspense>
        </div>
      </div>
    </div>
  );
};

export default page;
