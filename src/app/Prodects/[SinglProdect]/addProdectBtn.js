"use client";
import { useStore } from "@/store/store";
import React from "react";

const AddProdectBtn = ({ data }) => {
  let { addToShpingList } = useStore();
  let Prodect = data.product;
  return (
    <button
      onClick={() => addToShpingList(Prodect)}
      className="px-2 py-3 rounded-sm font-bold bg-black/65 text-white">
      Add To Shop{" "}
    </button>
  );
};

export default AddProdectBtn;
