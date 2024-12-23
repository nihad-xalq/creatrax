"use client";

import { OrderTableView } from "@/views/OrderTableView";
import { FiFilter, FiSearch } from "react-icons/fi";
import Select, { SingleValue } from "react-select";
import { useState } from "react";

interface SortOptionsTypes {
  value: string;
  label: string;
}

const sortOptions: SortOptionsTypes[] = [
  { value: "priority", label: "Priority" },
  { value: "status", label: "Status" },
];

export default function OrdersPage() {
  const [sortKey, setSortKey] = useState<SortOptionsTypes | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSortChange = (newValue: SingleValue<SortOptionsTypes>) => {
    setSortKey(newValue);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <div className="mb-5 flex flex-row items-end justify-between">
        <h1 className="text-4xl font-semibold mb-2">Sifarişlər</h1>
        <div className="filters_wrapper flex flex-row justify-between items-end gap-4 mt-4">
          {/* Sort Dropdown */}
          <div className="sort_wrapper flex flex-col items-start gap-2">
            <Select
              options={sortOptions}
              value={sortKey}
              onChange={handleSortChange}
              placeholder={
                <div className="flex flex-row items-center gap-2">
                  <FiFilter className="text-base" />
                  Sort by:
                </div>
              }
              className="w-52"
            />
          </div>

          {/* Search Input */}
          <div className="search_wrapper relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Sifarişi axtar..."
              className="text-sm border rounded px-3 py-2 pl-9 w-full"
            />
            <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Order Table View */}
      <OrderTableView
        sortKey={sortKey?.value || ""}
        searchQuery={searchQuery}
      />
    </div>
  );
}
