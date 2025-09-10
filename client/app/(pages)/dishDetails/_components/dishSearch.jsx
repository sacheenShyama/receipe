"use client";
import instance from "../../../../lib/axios";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const DishSearch = () => {
  const params = useParams();
  console.log(decodeURIComponent(params.name));
  useEffect(()=>{
    async function searchDish(){
try {
  const res=await fetch(instance.get())
} catch (error) {
  console.log(error)
}
    }
    searchDish();
  },[params])
  return <div>dishSearch</div>;
};

export default DishSearch;
