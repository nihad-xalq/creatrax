"use client";

import { MdOutlineModeEditOutline } from "react-icons/md";
import { orders } from "@/lib/mockData";
import React, { useMemo } from "react";
import { Order } from "@/types/ordersTypes";

type OrderTableViewProps = {
  sortKey: string;
  searchQuery: string;
};

export const OrderTableView: React.FC<OrderTableViewProps> = ({
  sortKey,
  searchQuery,
}) => {
  const handleOpenEditModal = (clientName: string) => {
    alert(`Edit: ${clientName}`);
  };

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

    // Apply sorting
    if (sortKey) {
      filteredOrders = filteredOrders.sort((a, b) => {
        if (sortKey === "priority") {
          const priorityOrder: { [key in Order["priority"]]: number } = {
            Yüksək: 1,
            Orta: 2,
            Aşağı: 3,
          };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        } else if (sortKey === "status") {
          return a.status.localeCompare(b.status);
        }
        return 0;
      });
    }

    return filteredOrders;
  }, [searchQuery, sortKey]);

  return (
    <div className="overflow-x-auto lg:overflow-x-visible rounded-lg">
      <div className=" rounded-lg">
        {/* Header Row */}
        <div className="grid grid-cols-[0.3fr_1.1fr_2fr_0.5fr_0.6fr_0.5fr_0.5fr_0.6fr_1.5fr] bg-gray-800 text-white font-medium text-sm rounded-lg mb-2">
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
          ].map((header) => (
            <div key={header} className="px-4 py-2 border-r last:border-none">
              {header}
            </div>
          ))}
        </div>

        {/* Data Rows */}
        <div>
          {filteredAndSortedOrders.map((order, index) => (
            <div
              key={order.id}
              className={`group grid grid-cols-[0.3fr_1.1fr_2fr_0.5fr_0.6fr_0.5fr_0.5fr_0.6fr_1.5fr] border mb-3 rounded-lg transition-transform ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:scale-[1.01] hover:shadow-md`}
            >
              {/* ID Column */}
              <div className="px-4 py-3 border-r border-l flex items-center gap-2">
                <div className="invisible group-hover:visible flex justify-between items-center gap-1 w-full transition-opacity duration-200">
                  <button
                    type="button"
                    title={`${order.taskName} məlumatlarına düzəliş et`}
                    onClick={() => handleOpenEditModal(order.taskName)}
                    className="text-blue-500 hover:text-blue-700 hover:bg-black/10 rounded-full p-1 transition-colors duration-200"
                  >
                    <MdOutlineModeEditOutline className="w-5 h-5" />
                  </button>
                </div>
                {order.id}
              </div>

              {/* Task Name Column */}
              <div className="px-4 py-3 border-r text-sm font-medium truncate" title={order.taskName}>
                {order.taskName}
              </div>

              {/* Description Column */}
              <div className="px-4 py-3 border-r text-sm truncate">
                {order.description}
              </div>

              {/* Priority Column */}
              <div className="px-4 py-3 border-r">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold block text-center ${
                    order.priority === "Yüksək"
                      ? "bg-red-100 text-red-600"
                      : order.priority === "Orta"
                      ? "bg-yellow-200 text-yellow-600"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {order.priority}
                </span>
              </div>

              {/* Assignee Column */}
              <div className="px-4 py-3 border-r text-sm">{order.assignee}</div>

              {/* Start Date Column */}
              <div className="px-4 py-3 border-r text-sm">
                {order.startDate}
              </div>

              {/* Due Date Column */}
              <div className="px-4 py-3 border-r text-sm">{order.dueDate}</div>

              {/* Status Column */}
              <div className="px-4 py-3 border-r text-sm">
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
              <div className="px-4 py-3 border-r text-sm text-gray-600 truncate">
                {order.comments}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
