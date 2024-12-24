"use client";

import { MdOutlineModeEditOutline } from "react-icons/md";
import { clients } from "@/lib/mockData";
import React from "react";

export const ClientsListView = () => {
  const handleOpenEditModal = (id: number) => {
    // Open edit modal
    console.log(`Edit: ${id}`);
  };

  return (
    <div className="overflow-x-auto rounded-lg">
      <div className="shadow-md rounded-lg">
        {/* Table Header */}
        <div className="grid grid-cols-[0.15fr_0.4fr_0.35fr_0.4fr_0.5fr_0.4fr_0.2fr_0.25fr_1fr] bg-gray-800 text-white font-medium text-xs md:text-sm rounded-t-lg">
          {[
            "ID",
            "Müştəri adı",
            "Sənaye/Sahə",
            "Əlaqədar şəxs",
            "Email",
            "Telefon",
            "Gəlir (₼)",
            // "Status",
            "Son söhbət",
            "Qeydlər",
          ].map((header) => (
            <div key={header} className="px-4 py-2 border-r">
              {header}
            </div>
          ))}
        </div>
        {/* Table Body */}
        <div>
          {clients.map((client, index) => (
            <div
              key={client.id}
              className={`group grid grid-cols-[0.15fr_0.4fr_0.35fr_0.4fr_0.5fr_0.4fr_0.2fr_0.25fr_1fr] border-b ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <div className="pr-4 pl-2 py-3 border-r flex flex-row items-center justify-center">
                {/* Edit Button */}
                <div className="invisible group-hover:visible willSimplyFadeIn flex flex-row justify-between items-center gap-1 w-full transition duration-200">
                  <button
                    type="button"
                    title={`${client.name} məlumatlarına düzəliş et`}
                    onClick={() => handleOpenEditModal(client.id)}
                    className="text-blue-500 hover:text-blue-700 hover:bg-black/10 rounded-full p-1 transition duration-200"
                  >
                    <MdOutlineModeEditOutline className="w-4 h-4" />
                  </button>
                </div>
                {client.id}
              </div>
              <div className="px-4 py-3 border-r text-sm font-medium truncate my-auto">
                {client.name}
              </div>
              <div className="px-4 py-3 border-r text-sm flex flex-row items-center justify-center text-center">
                {client.industry}
              </div>
              <div className="px-4 py-3 border-r text-sm flex flex-row items-center justify-center text-center">
                {client.contactPerson}
              </div>
              <div className="px-4 py-3 border-r truncate text-sm">
                {client.email}
              </div>
              <div className="px-4 py-3 border-r text-sm flex items-center">
                {client.phoneNumber}
              </div>
              <div className="px-4 py-3 border-r text-sm flex flex-row items-center justify-center text-center">
                {client.revenueGenerated}
              </div>
              {/* <div
                className={`px-4 py-3 border-r text-center ${
                  client.status === "Aktiv"
                    ? "text-green-600 font-semibold"
                    : client.status === "Gözləmədə"
                    ? "text-yellow-600 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {client.status}
              </div> */}
              <div className="px-4 py-3 border-r text-sm flex flex-row items-center justify-center text-center">
                {client.lastInteractionDate}
              </div>

              <div
                title={client.notes}
                className="px-4 py-3 border-r group text-xs text-gray-600 font-light my-auto truncate"
              >
                {client.notes}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
