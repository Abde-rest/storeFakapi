import React from "react";

async function fetchData() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("البيانات تم تحميلها!"), 5000)
  );
}

const DataBlog = async () => {
  let data = await fetchData();
  return <div>{data}</div>;
};

export default DataBlog;
