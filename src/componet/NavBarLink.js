"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBarLink = () => {
  let pathname = usePathname();

  let session = useSession();

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
        {session.status === "unauthenticated" ? (
          <button
            className="p-2  bg-black text-white rounded-sm"
            onClick={() => {
              signIn();
            }}>
            Sign In
          </button>
        ) : (
          <button
            className="p-2  bg-black text-white rounded-sm"
            onClick={() => {
              signOut();
            }}>
            Sing Out{" "}
          </button>
        )}
      </nav>
    </div>
  );
};

export default NavBarLink;
