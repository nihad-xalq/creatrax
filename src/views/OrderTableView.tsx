"use client";

import { MdOutlineModeEditOutline } from "react-icons/md";
import { orders } from "@/lib/mockData";
import React, { useMemo } from "react";

type OrderTableViewProps = {
  sortKey: string;
  searchQuery: string;
};

export const OrderTableView: React.FC<OrderTableViewProps> = ({
  sortKey,
  searchQuery,
}) => {
  const handleOpenEditModal = (clientName: string) => {
    alert(`Edit modal opened for client ID: ${clientName}`);
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
          const priorityOrder = { Yüksək: 1, Orta: 2, Aşağı: 3 };
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
    <div className="overflow-x-auto rounded-lg">
      <div className="shadow-md rounded-lg">
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
            <div key={header} className="px-4 py-2 border-r">
              {header}
            </div>
          ))}
        </div>
        <div>
          {filteredAndSortedOrders.map((order, index) => (
            <div
              key={order.id}
              className={`group grid grid-cols-[0.3fr_1.1fr_2fr_0.5fr_0.6fr_0.5fr_0.5fr_0.6fr_1.5fr] border mb-3 rounded-lg ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <div className="px-4 py-3 border-r border-l flex flex-row items-center gap-2">
                <div className="invisible group-hover:visible willSimplyFadeIn flex flex-row justify-between items-center gap-1 w-full transition duration-200">
                  <button
                    type="button"
                    title={`${order.taskName} məlumatlarına düzəliş et`}
                    onClick={() => handleOpenEditModal(order.taskName)}
                    className="text-blue-500 hover:text-blue-700 hover:bg-black/10 rounded-full p-1 transition duration-200"
                  >
                    <MdOutlineModeEditOutline className="w-5 h-5" />
                  </button>
                </div>
                {order.id}{" "}
              </div>
              <div className="px-4 py-3 border-r text-sm font-medium">{order.taskName}</div>
              <div className="px-4 py-3 border-r text-sm">
                {order.description}
              </div>
              <div className="px-4 py-3 border-r">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold w-full block text-center ${
                    order.priority === "Yüksək"
                      ? "bg-red-100 text-red-600"
                      : order.priority === "Orta"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {order.priority}
                </span>
              </div>
              <div className="px-4 py-3 border-r text-sm">{order.assignee}</div>
              <div className="px-4 py-3 border-r text-sm">
                {order.startDate}
              </div>
              <div className="px-4 py-3 border-r text-sm">{order.dueDate}</div>
              <div className="px-4 py-3 border-r text-sm my-auto">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold block text-center border ${
                    order.status === "İcra edilir"
                      ? "bg-yellow-100 text-yellow-600 border-yellow-300"
                      : order.status === "Gözləmədə"
                      ? "bg-purple-100 text-purple-500 border-purple-200"
                      : "bg-green-200 text-green-600 border-green-300"
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <div className="px-4 py-3 border-r text-sm text-gray-600 truncate my-auto">
                {order.comments}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
