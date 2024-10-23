import Image from "next/image";
// import Link from "next/link";
import img1 from "@/app/bg.webp";
export default function Home() {
  return (
    <div>
      <div className=" mt-40 flex items-center justify-center">
        <div className="">
          <h1 className="font-bold text-9xl my-2 font-serif"> FAVORITE</h1>
        </div>
      </div>

      {/* section two  */}

      <div className=" mt-40  gap-32 flex flex-wrap  m-auto w-full relative">
        <div className="text-start  ml-6 ">
          <h1 className=" text-xl my-2  text-white/80">Progects</h1>
          <h1 className=" text-sm   text-white/80">My Project For You</h1>
        </div>

        <div className="  grid grid-cols-3 ">
          {/* start box  */}
          <div className="p-2 rounded my-2  bg-white/10 overflow-hidden">
            <Image
              src={img1}
              alt="Img"
              className="hover:scale-105  transition-all rounded"
            />
            <h1 className="mt-2 font-thintext-sm"> Img Progect </h1>
          </div>
          <div className="p-2 rounded my-2  bg-white/10 overflow-hidden">
            <Image
              src={img1}
              alt="Img"
              className="hover:scale-105  transition-all rounded"
            />
            <h1 className="mt-2 font-thintext-sm"> Img Progect </h1>
          </div>

          <div className="p-2 rounded my-2  bg-white/10 overflow-hidden">
            <Image
              src={img1}
              alt="Img"
              className="hover:scale-105  transition-all rounded"
            />
            <h1 className="mt-2 font-thintext-sm"> Img Progect </h1>
          </div>
          <div className="p-2 rounded my-2  bg-white/10 overflow-hidden">
            <Image
              src={img1}
              alt="Img"
              className="hover:scale-105  transition-all rounded"
            />
            <h1 className="mt-2 font-thintext-sm"> Img Progect </h1>
          </div>

          <div className="p-2 rounded my-2  bg-white/10 overflow-hidden">
            <Image
              src={img1}
              alt="Img"
              className="hover:scale-105  transition-all rounded"
            />
            <h1 className="mt-2 font-thintext-sm"> Img Progect </h1>
          </div>
        </div>
      </div>

      {/* section Three  */}

      <div className=" mt-40  gap-32  m-auto ">
        {/* <h1 className="font-bold text-xl">Latst Blog</h1> */}
        <div className="text-start  ml-6  mb-20 flex items-center justify-between">
          <div>
            {" "}
            <h1 className=" text-xl my-2  text-white/80">Latst Blog</h1>
            <h1 className=" text-sm   text-white/80">My Latst Blog For You</h1>
          </div>

          <div>
            {" "}
            <p className=" hover:text-white text-sm   text-white/80">
              {" "}
              more Blog{" "}
            </p>
          </div>
        </div>

        <div className="  grid grid-cols-5 gap-5">
          {/* box  */}
          <div className="py-5 bg-white/10 rounded-lg px-5 ">
            <h4>Next.js 14 Latst UpDtae ... </h4>
            <i>
              <p className="mt-2 font-serif font-bold cursor-pointer  text-xs ">
                Lern Mor
              </p>
            </i>
          </div>

          <div className="py-5 bg-white/10 rounded-lg px-5 ">
            <h4>Next.js 14 Latst UpDtae ... </h4>
            <i>
              <p className="mt-2 font-serif font-bold cursor-pointer  text-xs ">
                Lern Mor
              </p>
            </i>
          </div>

          <div className="py-5 bg-white/10 rounded-lg px-5 ">
            <h4>Next.js 14 Latst UpDtae ... </h4>
            <i>
              <p className="mt-2 font-serif font-bold cursor-pointer  text-xs ">
                Lern Mor
              </p>
            </i>
          </div>

          <div className="py-5 bg-white/10 rounded-lg px-5 ">
            <h4>Next.js 14 Latst UpDtae ... </h4>
            <i>
              <p className="mt-2 font-serif font-bold cursor-pointer  text-xs ">
                Lern Mor
              </p>
            </i>
          </div>

          <div className="py-5 bg-white/10 rounded-lg px-5 ">
            <h4>Next.js 14 Latst UpDtae ... </h4>
            <i>
              <p className="mt-2 font-serif font-bold cursor-pointer  text-xs ">
                Lern Mor
              </p>
            </i>
          </div>
        </div>
      </div>

      <div className=" mt-40 flex items-center justify-center">
        <div className="">
          <h1 className="font-bold text-9xl my-2 font-serif"> THANKS .. </h1>
        </div>
      </div>
    </div>
  );
}
