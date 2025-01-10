"use client";

import { useState } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi2";

export const PaginationFooter = () => {
  // const activePaginationPageNumber: number = 1;

  const [activePagination, setActivePagination] = useState(1);

  const handlePaginationChange = (id: number) => {
    setActivePagination(id);
  };

  const handlePaginationChangeBySingleArrow = (action: string) => {
    if (action === "PREVIOUS") {
      if (activePagination <= 1) return;
      setActivePagination((prev) => prev - 1);
    } else if (action === "NEXT") {
      if (activePagination >= 6) return;
      setActivePagination((prev) => prev + 1);
    } else if (action === "TO_LATEST") {
      setActivePagination(6);
    } else if (action === "TO_FIRST") {
      setActivePagination(1);
    }
  };

  const paginationPages = [
    { text: "1" },
    { text: "2" },
    { text: "3" },
    { text: "4" },
    { text: "5" },
    { text: "6" },
    // { text: "7" },
    // { text: "8" },
    // { text: "9" },
    // { text: "10" },
    // { text: "11" },
    // { text: "12" },
  ];

  return (
    <div className="w-full h-max mx-auto fixed bottom-0 bg-white py-4 left-1/2 right-1/2 -translate-x-1/2 flex flex-row justify-center items-center text-center">
      <div className="pagination_inner flex flex-row items-center justify-between gap-3">
        <HiOutlineChevronDoubleLeft
          onClick={() => handlePaginationChangeBySingleArrow("TO_FIRST")}
          className="w-10 h-10 hover:bg-black/10 p-2 rounded-full transition duration-150 cursor-pointer"
        />
        <HiChevronLeft
          onClick={() => handlePaginationChangeBySingleArrow("PREVIOUS")}
          className="w-10 h-10 hover:bg-black/10 p-2 rounded-full transition duration-150 cursor-pointer"
        />

        <div className="flex flex-row items-center gap-2">
          {paginationPages.map((page, index) => (
            <div
              key={index}
              className={`w-11 h-11 rounded-[12px] bg-[rgba(246,246,246,1)] hover:bg-[#d6d6d6] text-[rgba(34,34,34,1)] flex items-center justify-center text-center transition duration-200 cursor-pointer ${
                activePagination === index + 1 &&
                "bg-[rgba(31,41,55,1)] text-white hover:bg-[#344255]"
              }`}
              onClick={() => handlePaginationChange(index + 1)}
            >
              {page.text}
            </div>
          ))}
        </div>

        <HiChevronRight
          onClick={() => handlePaginationChangeBySingleArrow("NEXT")}
          className="w-10 h-10 hover:bg-black/10 p-2 rounded-full transition duration-150 cursor-pointer"
        />
        <HiOutlineChevronDoubleRight
          onClick={() => handlePaginationChangeBySingleArrow("TO_LATEST")}
          className="w-10 h-10 hover:bg-black/10 p-2 rounded-full transition duration-150 cursor-pointer"
        />
      </div>
    </div>
  );
};
