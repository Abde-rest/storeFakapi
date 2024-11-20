"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBarLink = () => {
  let pathname = usePathname();

  return (
    <div>
      <nav className="flex items-center ">
        {" "}
        <Link
          className={`${
            pathname === "/" ? "active" : null
          }  text-sm p-2 relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-black/80 hover:before:w-full before:transition-all`}
          href={"/"}>
          Home
        </Link>
        <Link
          className={`${
            pathname === "/Prodects" ? "active" : null
          }  text-sm p-2 relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-black/80 hover:before:w-full before:transition-all`}
          href={"/Prodects"}>
          Explor
        </Link>
        <Link
          className={`${
            pathname === "/blog" ? "active" : null
          }  text-sm p-2 relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-black/80 hover:before:w-full before:transition-all`}
          href={"/blog"}>
          About us
        </Link>
      </nav>
    </div>
  );
};

export default NavBarLink;
