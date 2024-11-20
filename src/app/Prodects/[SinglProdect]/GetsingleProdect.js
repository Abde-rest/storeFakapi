const GetsingleProdect = async (id) => {
  let res = await fetch(`https://fakestoreapi.in/api/products/${id}`, {
    cache: "no-store",
  });
  let data = await res.json();

  return data;
};

export default GetsingleProdect;




/// I Cand Ues Her The Function getstaticParam()