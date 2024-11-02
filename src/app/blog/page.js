import React from "react";

const Blog = async () => {
  // جلب البيانات من API
  const res = await fetch("https://dummyjson.com/users");
  
  // التحقق من نجاح الجلب
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return (
    <>
      <div className="mt-40 flex items-center justify-center">
        <div>
          <h1 className="font-bold text-5xl lg:text-9xl my-2 font-serif">
            Users
          </h1>
        </div>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 m-auto gap-3">
        {data.users.map((user) => (
          <div key={user.id} className="py-5 bg-white/10 rounded-lg px-5">
            <h4 className="font-bold">{user.firstName} {user.lastName}</h4>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <i>
              <p className="mt-2 font-serif font-bold cursor-pointer text-xs">
                More Info
              </p>
            </i>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
