import Link from "next/link";

const TableComponent = ({
  data,
  setLimit,
  setPage,
  total,
  totalPage,
  page,
}) => {
  console.log(data);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 ">
              Name
            </th>
            <th scope="col" className="px-6 py-3 ">
              Prep_Time
            </th>
            <th scope="col" className="px-6 py-3 ">
              Cook_Time
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

          {data &&
            data.map((item, index) => {
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
