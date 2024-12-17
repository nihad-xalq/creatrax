"use client";

import { MdOutlineModeEditOutline } from "react-icons/md";
import { orders } from "@/lib/mockData";
import React from "react";

export const OrderTableView = () => {
  const handleOpenEditModal = (id: number) => {
    // Open edit modal
    console.log(`Edit modal opened for client ID: ${id}`);
  };

  return (
    <div className="overflow-x-auto rounded-lg">
      <div className="shadow-md rounded-lg">
        <div className="grid grid-cols-[0.4fr_1.1fr_2fr_0.5fr_0.6fr_0.5fr_0.5fr_0.6fr_1.5fr] bg-gray-800 text-white font-medium text-sm rounded-lg mb-2">
          {[
            "Task ID",
            "Task Name",
            "Description",
            "Priority",
            "Assignee",
            "Start Date",
            "Due Date",
            "Status",
            "Comments",
          ].map((header) => (
            <div key={header} className="px-4 py-2 border-r">
              {header}
            </div>
          ))}
        </div>
        <div>
          {orders.map((order, index) => (
            <div
              key={order.id}
              className={`group grid grid-cols-[0.4fr_1.1fr_2fr_0.5fr_0.6fr_0.5fr_0.5fr_0.6fr_1.5fr] border mb-3 rounded-lg ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <div className="px-4 py-3 border-r border-l flex flex-row items-center gap-2">
                <div className="invisible group-hover:visible willSimplyFadeIn flex flex-row justify-between items-center gap-1 w-full transition duration-200">
                  <button
                    type="button"
                    title={`${order.taskName} məlumatlarına düzəliş et`}
                    onClick={() => handleOpenEditModal(order.id)}
                    className="text-blue-500 hover:text-blue-700 hover:bg-black/10 rounded-full p-1 transition duration-200"
                  >
                    <MdOutlineModeEditOutline className="w-5 h-5" />
                  </button>
                </div>
                {order.id}{" "}
              </div>
              <div className="px-4 py-3 border-r">{order.taskName}</div>
              <div className="px-4 py-3 border-r">{order.description}</div>
              <div className="px-4 py-3 border-r">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold w-full block text-center ${
                    order.priority === "High"
                      ? "bg-red-100 text-red-600"
                      : order.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {order.priority}
                </span>
              </div>
              <div className="px-4 py-3 border-r text-sm">{order.assignee}</div>
              <div className="px-4 py-3 border-r">{order.startDate}</div>
              <div className="px-4 py-3 border-r">{order.dueDate}</div>
              <div className="px-4 py-3 border-r">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold block text-center border ${
                    order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600 border-yellow-300"
                      : order.status === "In Progress"
                      ? "bg-blue-100 text-blue-600 border-blue-300"
                      : "bg-green-200 text-green-600 border-green-300"
                  }`}
                >
                  {order.status}
                </span>
              </div>
              {/* <div className="px-4 py-3 border-r text-sm text-gray-600 flex flex-row justify-between items-center">
                {order.comments}
                <button
                  type="button"
                  className="willSimplyFadeIn hidden group-hover:flex flex-col items-center gap-0 p-1 hover:bg-black/10 transition duration-200 rounded-full"
                  onClick={handleOpenEditModal}
                >
                  <MdOutlineModeEditOutline className="w-4 h-4" />
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
