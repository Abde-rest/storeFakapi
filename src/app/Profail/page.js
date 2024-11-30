import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

const page = async () => {
  let session = await getServerSession(authOptions);
  return (
    <div>
      <div className="flex items-center justify-center text-center">
        <div>
          {" "}
          <div className="bg-gray-500 rounded-full overflow-hidden">
            <Image
              src={session.user.Image}
              alt="ProfailImage"
              width={300}
              height={300}
            />
          </div>
          <h1>{session.user.name}</h1>
          <h1>{session.user.email}</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
