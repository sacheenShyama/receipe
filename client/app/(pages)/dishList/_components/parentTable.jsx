"use client";
import instance from "../../../../lib/axios";
import TableComponent from "../../../components/table";
import React, { useEffect, useState } from "react";
// setLimit, setPage, total, totalPage
const ParentTable = () => {
  const [dishList, setDisList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    async function fetchdata() {
      try {
        const res = await instance.get(`/dishes?page=${page}&limit=${limit}`);
        setDisList(res.data.data);
        setTotal(res.data.total);
        setTotalPage(res.data.totalPages);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchdata();
  }, [page]);
  return (
    <div>
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
