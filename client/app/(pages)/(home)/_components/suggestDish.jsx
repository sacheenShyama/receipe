"use client";
import TableComponent from "../../../components/table";
import instance from "../../../../lib/axios";
import React, { useState } from "react";
import { set } from "zod";

const SuggestDish = () => {
  const [ingredients, setIngredients] = useState("");
  const [result, setResult] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPage, setTotalPage] = useState(1);
  const [total, setTotal] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = ingredients
      .split(",")
      .map((i) => i.trim())
      .filter((i) => i.length > 0);
    try {
      const res = await instance.post("/possibleDishes", {
        data: data,
        page: page,
        limit: limit,
      });
      setResult(res.data.data);
      setTotal(res.data.total);
      setTotalPage(res.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(result);
  return (
    <div>
      <form>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value.trim())}
            name="ingredients"
            id="floating_ingredients"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" rice flour, sugar, ghee etc..."
            required
          />
        </div>
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          className="bg-gray-600 p-3 text-white rounded"
        >
          Find Dish
        </button>
      </form>
      <div>
        {result.length > 0 && (
          <>
            <p className="mt-5 font-bold">Dishes you can make</p>
            <TableComponent
              data={result}
              setLimit={setLimit}
              total={total}
              totalPage={totalPage}
              setPage={setPage}
              page={page}
            />{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default SuggestDish;
