"use client";

import { OrderTableView } from "@/views/OrderTableView";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const [isMounted, setIsMounted] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleAddNewOrder = () => {
    alert("Add new order");
  };

  return (
    <div>
      <div className="mb-8 flex flex-col lg:flex-col items-start lg:items-end justify-between gap-6">
        <div className="flex flex-row items-center justify-between w-full text-white">
          <h1 className="text-4xl text-gray-900 font-semibold">Sifarişlər</h1>
          <button
            type="button"
            onClick={handleAddNewOrder}
            className="bg-[rgba(31,41,55,1)] hover:shadow-[0_3px_0px_1px_rgba(0,0,0,0.5)] py-3 px-8 rounded-[12px] flex flex-row items-center gap-3 transition duration-200"
          >
            <FaPlus />
            Add New Order
          </button>
        </div>
        <div className="filters_wrapper flex flex-row justify-between items-end gap-4 mt-4">
          {isMounted && (
            <div className="sort_wrapper willSimplyFadeIn flex flex-col lg:flex-row items-start gap-2">
              {/* Search Input */}
              <div className="search_wrapper relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Sifarişi axtar..."
                  className="text-sm border border-[rgba(227,227,227,1)] rounded-[12px] px-3 py-3 pl-9 w-full outline-none focus:ring-1 focus:ring-slate-400 focus:shadow-md transition duration-200"
                />
                <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[rgba(136,136,136,1)]" />
              </div>

              {/* Filter */}
              <button
                type="button"
                className="bg-white hover:bg-black/5 py-2.5 px-4 rounded-[12px] flex flex-row items-center justify-between gap-3 border border-[rgba(227,227,227,1)] transition duration-150"
              >
                <VscSettings />
                Filter
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Order Table View */}
      <OrderTableView searchQuery={searchQuery} />
    </div>
  );
}
