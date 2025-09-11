"use client";
import instance from "../../../../lib/axios";
import TableComponent from "../../../components/table";
import React, { useEffect, useState } from "react";
import Filter from "./filter";
// setLimit, setPage, total, totalPage
const ParentTable = () => {
  const [dishList, setDisList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [filterData, setFilterData] = useState({});

  useEffect(() => {
    async function fetchdata() {
      try {
        // Build query string
        const params = new URLSearchParams({
          page,
          limit,
          ...(filterData.diet && { diet: filterData.diet.join(",") }),
          ...(filterData.course && { course: filterData.course.join(",") }),
          ...(filterData.flavor_profile && {
            flavor: filterData.flavor_profile.join(","),
          }),
          ...(filterData.region && { region: filterData.region.join(",") }),
          ...(filterData.state && { state: filterData.state.join(",") }),
        });

        const res = await instance.get(`/dishes?${params.toString()}`);

        setDisList(res.data.data);
        setTotal(res.data.total);
        setTotalPage(res.data.totalPages);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchdata();
  }, [page, limit, filterData]);
  return (
    <div>
      <Filter filterData={filterData} setFilterData={setFilterData} />
      <TableComponent
        data={dishList}
        setLimit={setLimit}
        total={total}
        totalPage={totalPage}
        setPage={setPage}
        page={page}
      />
    </div>
  );
};

export default ParentTable;
