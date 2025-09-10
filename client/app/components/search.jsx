"use client";
import React, { useEffect, useState } from "react";
import useDebounce from "../hook/useDebounce";
import instance from "../../lib/axios";
import Link from "next/link";

const Search = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const deboucedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (deboucedQuery) {
      console.log("api calling");
      instance
        .get(`dish/search?q=${deboucedQuery}`)
        .then((res) => setResult(res.data))
        .catch((err) => {
          console.log(err);
          setResult([]);
        });
    }
  }, [deboucedQuery]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value.trim())}
        type="text"
        placeholder="Search"
        className="border rounded-lg px-3 py-1 w-1/2  sm:w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {result.length > 0 && (
        <ul className="absolute bg-white p-2 shadow-md rounded z-10 mt-5  ">
          {result.map((dish, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-300 rounded"
              onClick={() => {
                setQuery("");
                setResult([]);
              }}
            >
              <Link href={`/dishDetails/${encodeURIComponent(dish.name)}`}>
                <strong>{dish.name}</strong> - {dish.state} -{" "}
                {dish.flavor_profile}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
