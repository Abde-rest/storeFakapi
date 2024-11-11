// "use client";
// import Pargrph from "../componet/Pargrph";
import Link from "next/link";
import React from "react";
import "@/app/globals.css";
import Image from "next/image";
import img from "@/public/bg2.avif";
import Progectimg1 from "@/public/Progect/1.jpg";
import Progectimg2 from "@/public/Progect/2.jpg";
import Progectimg3 from "@/public/Progect/3.jpg";
// import AnimatedText from "@/componet/animatText";
// import AnimatedText from "@/componet/animatText";

// import Progectimg2 from "@/public/Project/2.jpg";
const page = () => {
  return (
    <div className="container m-auto px-3 lg:px-10">
      <header className="flex justify-end mt-9">
        <Link
          className="text-xs p-2 relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white/80  hover:before:w-full before:transition-all"
          href={"/"}>
          Home
        </Link>
        <Link
          className="text-xs p-2 relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white/80  hover:before:w-full before:transition-all"
          href={"/About"}>
          About
        </Link>
        <Link
          className="text-xs p-2 relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white/80  hover:before:w-full before:transition-all"
          href={"/blog"}>
          Blog
        </Link>
      </header>

      {/* start Text Top section 1  */}
      <div className="grid sm:grid-cols-2 gap-10 mt-10">
        <div>
          <p className="font-normal text-sm  border-b w-fit pb-1 mb-2">
            We work
          </p>

          {/* <AnimatedText> */}
          <p>
            Hello! I&apos;m Abdou Lach a passionate Front-End Developer from
            Algeria. With a strong foundation. in frameworks Next js and React.
          </p>
          {/* </AnimatedText> */}
        </div>

        <div>
          <i className="text-lg font-thin selection:font-normal selection:text-black selection:bg-white/90">
            &quot;Success doesn’t come from hard work alone, but from passion
            and a constant drive to improve. Creating something that makes
            people&apos;s lives better is the greatest achievement one can
            reach.&quot;
          </i>
        </div>
      </div>

      {/* section img  */}
      <div className="bg-white/5 h-full w-full mt-10 rounded overflow-hidden relative flex items-center justify-center shadow-inner shadow-white-100">
        <Image
          src={
            img
            // "https://img.freepik.com/photos-gratuite/feuille-automne-tombant-revelant-veine-feuille-complexe-generee-par-ia_188544-9869.jpg?t=st=1730994652~exp=1730998252~hmac=28f41d08097f413b692c72f20d790554a0379626c214db264f7ded217622e736&w=996"
          }
          alt={"Photo Naturall"}
          style={{
            width: "100%",
            height: "100%",
            zIndex: 100,
          }}
          placeholder="blur"
          blurDataURL="@/public/loding.webp"
        />
      </div>

      {/* section progect  */}
      {/* className="grid sm:grid-cols-2 gap-10 mt-10 h-screen" */}
      <div className="mt-32 ">
        <h1 className=" font-light text-2xl m-auto border-b w-fit pb-4 mb-2">
          {" "}
          My Work{" "}
        </h1>
        {/* <h1 className=" font-light mt-2"> Latst Progect Can By Tayk Any Mind </h1> */}
        <button className="font-extralight mt-10 m-auto  block bg-white/20 p-2 rounded-lg hover:bg-white/40 transition-all  ">
          Explore
        </button>

        {/* start project  */}
        <div className="mt-20 grid md:grid-cols-2 m-auto  md:gap-8 lg:gap-0  ">
          <Image
            src={Progectimg1}
            alt={"Photo progect"}
            className="w-full  lg:max-w-96 m-auto  "
            style={{
              height: "100%",
              zIndex: 100,
              borderRadius: "10px",
            }}
            placeholder="blur"
            blurDataURL="@/public/loding.webp"
          />

          <div className="mt-3">
            <h1 className=" text-xl mt-1 mb-2">E-coomerc Web - Shop </h1>
            <p>
              {" "}
              E-coomerc Web - Shop That Can By shop online E-coomerc Web - Shop
              That Can By shop online E-coomerc Web - Shop That Can By shop
              online
            </p>
            <div className=" flex flex-col mt-2  ">
              <p className="">Tehnolgthic : </p>
              <div className="flex mt-2 gap-2 items-center w-fit">
                <p className="font-extralight cursor-default w-full  bg-white/20 p-2 text-sm rounded-lg hover:bg-white/40 transition-all  ">
                  Next js{" "}
                </p>
                <p className="font-extralightt cursor-default w-full bg-white/20 p-2 text-sm rounded-lg hover:bg-white/40 transition-all  ">
                  React{" "}
                </p>
                <p className="font-extralightt cursor-default w-full bg-white/20 p-2 text-sm rounded-lg hover:bg-white/40 transition-all  ">
                  Tailwend{" "}
                </p>
                <p className="font-extralightt cursor-default w-full bg-white/20 p-2 text-sm rounded-lg hover:bg-white/40 transition-all  ">
                  Framer Motion{" "}
                </p>
              </div>
            </div>
            <p className="font-thin text-sm mt-4 ">Explore </p>
          </div>
        </div>

        {/* start project  */}
        <div className="mt-20 sm:mt-10 grid md:grid-cols-2 m-auto md:gap-8 lg:gap-0  ">
          <Image
            src={Progectimg3}
            alt={"Photo progect"}
            className="w-full  lg:max-w-96 m-auto  "
            style={{
              height: "100%",
              zIndex: 100,
              borderRadius: "10px",
            }}
            placeholder="blur"
            blurDataURL="@/public/loding.webp"
          />

          <div className="mt-3">
            <h1 className=" text-xl mt-1 mb-2">E-coomerc Web - Shop </h1>
            <p>
              {" "}
              E-coomerc Web - Shop That Can By shop online E-coomerc Web - Shop
              That Can By shop online E-coomerc Web - Shop That Can By shop
              online
            </p>
            <div className=" flex flex-col mt-2  ">
              <p className="">Tehnolgthic : </p>
              <div className="flex mt-2 gap-2 items-center w-fit">
                <p className="font-extralight cursor-default w-full  bg-white/20 p-2 text-sm rounded-lg hover:bg-white/40 transition-all  ">
                  Next js{" "}
                </p>
                <p className="font-extralightt cursor-default w-full bg-white/20 p-2 text-sm rounded-lg hover:bg-white/40 transition-all  ">
                  React{" "}
                </p>
                <p className="font-extralightt cursor-default w-full bg-white/20 p-2 text-sm rounded-lg hover:bg-white/40 transition-all  ">
                  Tailwend{" "}
                </p>
                <p className="font-extralightt cursor-default w-full bg-white/20 p-2 text-sm rounded-lg hover:bg-white/40 transition-all  ">
                  Framer Motion{" "}
                </p>
              </div>
            </div>
            <p className="font-thin text-sm mt-4 ">Explore </p>
          </div>
        </div>

        {/* start project  */}
        <div className="mt-20 sm:mt-10 grid md:grid-cols-2 m-auto  md:gap-8 lg:gap-0 ">
          <Image
            src={Progectimg2}
            alt={"Photo progect"}
            className="w-full  lg:max-w-96 m-auto  "
            style={{
              height: "100%",
              zIndex: 100,
              borderRadius: "10px",
            }}
            placeholder="blur"
            blurDataURL="@/public/loding.webp"
          />

          <div className="mt-3">
            <h1 className=" text-xl mt-1 mb-2">E-coomerc Web - Shop </h1>
            <p>
              {" "}
              E-coomerc Web - Shop That Can By shop online E-coomerc Web - Shop
              That Can By shop online E-coomerc Web - Shop That Can By shop
              online
            </p>
            <div className=" flex flex-col mt-2  ">
              <p className="">Tehnolgthic : </p>
              <div className="flex mt-2 gap-2 items-center w-fit">
                <p className="font-extralight cursor-default w-full  bg-white/20 p-2 text-sm rounded-lg hover:bg-white/40 transition-all  ">
                  Next js{" "}
                </p>
                <p className="font-extralightt cursor-default w-full bg-white/20 p-2 text-sm rounded-lg hover:bg-white/40 transition-all  ">
                  React{" "}
                </p>
                <p className="font-extralightt cursor-default w-full bg-white/20 p-2 text-sm rounded-lg hover:bg-white/40 transition-all  ">
                  Tailwend{" "}
                </p>
                <p className="font-extralightt cursor-default w-full bg-white/20 p-2 text-sm rounded-lg hover:bg-white/40 transition-all  ">
                  Framer Motion{" "}
                </p>
              </div>
            </div>
            <p className="font-thin text-sm mt-4 ">Explore </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
