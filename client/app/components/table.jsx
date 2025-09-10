"use client";
import Link from "next/link";
import { useState } from "react";

const TableComponent = ({
  data,
  setLimit,
  setPage,
  total,
  totalPage,
  page,
}) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data];
  if (sortConfig.key) {
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

  function renderSortIcon(key) {
    if (sortConfig.key !== key) {
      return null;
    }
    return sortConfig.direction === "ascending" ? "▲" : "▼";
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Name {renderSortIcon("name")}
            </th>
            <th
              scope="col"
              className="px-6 py-3 cursor-pointer"
              onClick={() => handleSort("prep_time")}
            >
              Prep_Time {renderSortIcon("prep_time")}
            </th>
            <th
              scope="col"
              className="px-6 py-3 cursor-pointer"
              onClick={() => handleSort("cook_time")}
            >
              Cook_Time {renderSortIcon("cook_time")}
            </th>
            <th scope="col" className="px-6 py-3">
              Course
            </th>
            <th scope="col" className="px-6 py-3">
              flavor
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Example Row */}

          {sortedData &&
            sortedData.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Link
                      href={`/dishDetails/${encodeURIComponent(item.name)}`}
                      className="hover:underline"
                    >
                      {item.name}
                    </Link>
                  </th>
                  <td className="px-6 py-4">{item.prep_time} minute</td>
                  <td className="px-6 py-4">{item.cook_time} minute</td>
                  <td className="px-6 py-4">{item.course} </td>
                  <td className="px-6 py-4">{item.flavor_profile} </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {/* Pagination */}
      <div
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {/* 1-10 */}
            {/* {page} - {page + 9} */}
            {page * 10 - 9} - {page * 10}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {total}
          </span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <button
              onClick={() => setPage(page - 1)}
              className="font-bold mr-4 cursor-pointer"
            >
              Previous
            </button>
          </li>

          <li>
            <button
              onClick={() => setPage(page + 1)}
              className="font-bold mr-2 cursor-pointer"
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TableComponent;
