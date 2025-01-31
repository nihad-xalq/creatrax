"use client";

import { financesData } from "@/lib/mockData";
import { useState } from "react";

const tabs: {
  label: string;
  key: "incomes" | "expenses";
}[] = [
  { label: "Gəlirlər", key: "incomes" },
  { label: "Xərclər", key: "expenses" },
];

export const FinancesView = () => {
  const [currentTab, setCurrentTab] = useState<"incomes" | "expenses">(
    "incomes"
  );

  const handleTabClick = (tab: "incomes" | "expenses") => setCurrentTab(tab);

  const filteredData = financesData.filter((item) => item.type === currentTab);

  return (
    <section className="willFadeFromAbove">
      <div className="about_inner">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Maliyyə Hesabatı
        </h1>

        {/* Tabs */}
        <div className="flex gap-3 mb-4 bg-[rgba(251,251,251,1)] w-max px-2 py-2 rounded-[9px]">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`min-w-28 flex justify-center items-center gap-2 px-4 py-2.5 rounded-[9px] text-sm text-center font-medium transition-all
                ${
                  currentTab === tab.key
                    ? "bg-[rgba(31,41,55,1)] text-white"
                    : "text-[rgba(34,34,34,1)] hover:bg-gray-200"
                }
              `}
              onClick={() => handleTabClick(tab.key)}
              disabled={currentTab === tab.key}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Data Display */}
        <div className="grid gap-3">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div
                key={item.id}
                className="bg-white p-2 rounded-md border-l-4 border-blue-500 shadow-sm hover:shadow-md transition duration-200"
              >
                <h2 className="text-lg font-medium text-gray-800 mb-0.5">
                  {item.title}
                </h2>
                <p className="text-xs text-gray-600 mb-1">{item.content}</p>
                <div className="flex justify-between text-xs text-gray-700">
                  <span>
                    Məbləğ:{" "}
                    <span className="text-blue-600 font-semibold">
                      {item.amount} AZN
                    </span>
                  </span>
                  <span className="text-gray-500">📅 {item.date}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center text-sm">
              Məlumat tapılmadı.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
