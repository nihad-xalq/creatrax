"use client";

import { MantineDropdown } from "@/components/ui/MantineDropdown";
import { MantineTooltip } from "@/components/ui/MantineTooltip";
import { MdDelete, MdEdit } from "react-icons/md";
import { HiOutlineEye } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";
import { orders } from "@/lib/mockData";
import React, { useMemo } from "react";

type OrderTableViewProps = {
  searchQuery: string;
};

interface OrderActionsDataType {
  label: string;
  icon: React.ReactNode;
}

const orderActionsData: OrderActionsDataType[] = [
  {
    label: "Edit",
    icon: <MdEdit className="text-blue-500" />,
  },
  {
    label: "Delete",
    icon: <MdDelete className="text-red-500" />,
  },
];

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

  return (
    <div className="overflow-x-auto lg:overflow-x-visible rounded-lg willFadeFromAbove">
      <div className=" rounded-lg">
        {/* Header Row */}
        <div className="grid grid-cols-[0.2fr_1.1fr_2fr_0.5fr_0.6fr_0.5fr_0.5fr_0.6fr_0.35fr_0.35fr] bg-[rgba(251,251,251,1)] text-[rgba(127,127,127,1)] font-medium text-sm rounded-lg">
          {[
            "ID",
            "Sifariş Adı",
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
                  className={`px-2 py-3 rounded-full text-xs font-semibold block text-center ${
                    order.status === "İcra edilir"
                      ? " text-[rgba(202,138,3,1)] bg-[rgba(255,251,220,1)]"
                      : order.status === "Cancelled"
                      ? " text-[rgba(254,35,35,1)] bg-[rgba(255,231,231,1)]"
                      : order.status === "Tamamlandı"
                      ? " text-[rgba(46,188,28,1)] bg-[rgba(232,255,227,1)]"
                      : "text-[rgba(34,34,34,1)] bg-[rgba(239,239,239,1)]"
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
                  isDisabled={true}
                />
              </div>

              {/* Actions column */}
              <div className="text-sm text-gray-600 m-auto">
                <MantineDropdown
                  triggerBtn={
                    <div className="group p-1 hover:bg-[rgba(246,246,246,1)] rounded-full cursor-pointer transition duration-300">
                      {/* <IoNotificationsOutline className="w-8 lg:w-5 h-8 lg:h-5 text-[rgba(34,34,34,1)] group-hover:text-white" /> */}
                      <BsThreeDots className="w-6 h-6" />
                    </div>
                  }
                  data={orderActionsData}
                  dropdownWidth={120}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
