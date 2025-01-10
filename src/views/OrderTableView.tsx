"use client";

import { MantineTooltip } from "@/components/ui/MantineTooltip";
import { HiOutlineEye } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";
import { orders } from "@/lib/mockData";
import React, { useMemo } from "react";

type OrderTableViewProps = {
  searchQuery: string;
};

export const OrderTableView: React.FC<OrderTableViewProps> = ({
  searchQuery,
}) => {
  // Filter and sort orders based on searchQuery and sortKey
  const filteredAndSortedOrders = useMemo(() => {
    let filteredOrders = orders;

    // Apply search filter
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      filteredOrders = filteredOrders.filter(
        (order) =>
          order.taskName.toLowerCase().includes(lowerCaseQuery) ||
          order.description.toLowerCase().includes(lowerCaseQuery)
      );
    }
    return filteredOrders;
  }, [searchQuery]);

  const handleOpenActionsMenu = (id: number) => {
    // Show actions menu for the current order
    alert(`Open actions menu for order: ${id}`);
  };

  return (
    <div className="overflow-x-auto lg:overflow-x-visible rounded-lg">
      <div className=" rounded-lg">
        {/* Header Row */}
        <div className="grid grid-cols-[0.2fr_1.1fr_2fr_0.5fr_0.6fr_0.5fr_0.5fr_0.6fr_0.35fr_0.35fr] bg-[rgba(251,251,251,1)] text-[rgba(127,127,127,1)] font-medium text-sm rounded-lg">
          {[
            "ID",
            "Tapşırıq Adı",
            "Təsvir",
            "Prioritet",
            "Təyin edilən",
            "Başl. Tarixi",
            "Bit. Tarixi",
            "Status",
            "Şərhlər",
            "Actions",
          ].map((header) => (
            <div key={header} className="px-4 py-2">
              {header}
            </div>
          ))}
        </div>

        {/* Data Rows */}
        <div className="font-[500]">
          {filteredAndSortedOrders.map((order, index) => (
            <div
              key={order.id}
              className={`group grid grid-cols-[0.2fr_1.1fr_2fr_0.5fr_0.6fr_0.5fr_0.5fr_0.6fr_0.35fr_0.35fr] rounded-lg ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              {/* ID Column */}
              <div className="px-4 py-1 flex items-center gap-2">
                {order.id}
              </div>

              {/* Task Name Column */}
              <div
                className="px-4 py-2 text-sm font-medium truncate my-auto"
                title={order.taskName}
              >
                {order.taskName}
              </div>

              {/* Description Column */}
              <div className="px-4 py-2 text-sm truncate my-auto">
                {order.description}
              </div>

              {/* Priority Column */}
              <div className="px-4 py-2 my-auto">
                <span
                  className={`px-1 py-3 rounded-full text-xs font-semibold block text-center ${
                    order.priority === "Yüksək"
                      ? "bg-[rgba(255,231,231,1)] text-[rgba(254,35,35,1)]"
                      : order.priority === "Orta"
                      ? "bg-[rgba(255,251,220,1)] text-[rgba(202,138,3,1)]"
                      : "bg-[rgba(239,239,239,1)] text-[rgba(34,34,34,1)]"
                  }`}
                >
                  {order.priority}
                </span>
              </div>

              {/* Assignee Column */}
              <div className="px-4 py-2 text-sm my-auto">{order.assignee}</div>

              {/* Start Date Column */}
              <div className="px-4 py-2 text-sm my-auto">{order.startDate}</div>

              {/* Due Date Column */}
              <div className="px-4 py-2 text-sm my-auto">{order.dueDate}</div>

              {/* Status Column */}
              <div className="px-4 py-2 text-sm my-auto">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold block text-center border ${
                    order.status === "İcra edilir"
                      ? " text-yellow-600 border-yellow-300"
                      : order.status === "Gözləmədə"
                      ? " text-purple-500 border-purple-200"
                      : " text-green-600 border-green-300"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              {/* Comments Column */}
              <div className="text-sm text-gray-600 m-auto">
                <MantineTooltip
                  tooltipTriggerBtn={
                    <HiOutlineEye className="text-black w-6 h-6" />
                  }
                  tooltipText={order.comments}
                />
              </div>

              {/* Actions column */}
              <div className="text-sm text-gray-600 m-auto">
                <button
                  type="button"
                  className="block hover:bg-black/10 rounded-full p-1.5 transition duration-200"
                  onClick={() => handleOpenActionsMenu(order.id)}
                >
                  <BsThreeDots className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
