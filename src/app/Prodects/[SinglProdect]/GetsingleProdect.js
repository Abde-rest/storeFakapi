"use server";
const GetsingleProdect = async (id) => {
  let res = await fetch(`https://fakestoreapi.in/api/products/${id}`);
  let data = await res.json();
  console.log("This Is Prodect ");

  return data;
};

export default GetsingleProdect;

/// I Cand Ues Her The Function getstaticParam()
