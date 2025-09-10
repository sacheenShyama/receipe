"use client";
import instance from "../../../../lib/axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const DishSearch = () => {
  const params = useParams();
  const name = decodeURIComponent(params.name);
  console.log(name);
  const [dishData, setDishData] = useState(null);
  // console.log(decodeURIComponent(params.name));
  useEffect(() => {
    async function searchDish() {
      try {
        const res = await instance.get(`/dish?name=${name}`);
        console.log("serach", res.data);
        setDishData(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    searchDish();
  }, [name]);
  return (
    <div>
      {dishData ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">{dishData.name}</h2>
          <p className="mb-2">
            <strong>Ingredients:</strong> {dishData.ingredients}
          </p>
          <p className="mb-2">
            <strong>Course:</strong> {dishData.course}
          </p>
          <p className="mb-2">
            <strong>Diet:</strong> {dishData.diet}
          </p>
          <p className="mb-2">
            <strong>Flavor:</strong> {dishData.flavor_profile}
          </p>
          <p className="mb-2">
            <strong>Preparation Time:</strong> {dishData.prep_time} minutes
          </p>
          <p className="mb-2">
            <strong>Cooking Time:</strong> {dishData.cook_time} minutes
          </p>
          <p className="mb-2">
            <strong>Region:</strong> {dishData.region}
          </p>
          <p className="mb-2">
            <strong>State:</strong> {dishData.state}
          </p>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};

export default DishSearch;
