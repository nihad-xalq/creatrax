"use client";

import { Branch } from "@/types/branchesTypes";
import { useState } from "react";
import Link from "next/link";
import { FiMinus, FiPlus } from "react-icons/fi";

interface BranchesViewProps {
  data: Branch[];
}

export const BranchesView: React.FC<BranchesViewProps> = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState(6); // Initial visible count

  const handleToggle = () => {
    if (visibleCount >= data.length) {
      setVisibleCount(6); // Reset to the initial count
    } else {
      setVisibleCount((prev) => prev + 6); // Load 6 more
    }
  };

  const isAllLoaded = visibleCount >= data.length;

  return (
    <div className="">
      <h1 className="text-4xl font-extrabold mb-5 text-gray-900">Filiallar</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.slice(0, visibleCount).map((branch) => (
          <li
            key={branch.id}
            className="willSimplyFadeIn bg-white p-5 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {branch.name}
            </h2>
            <p className="text-md text-gray-700 font-light mb-2">
              {branch.location}
            </p>
            <Link
              href={`/branches/${branch.id}`}
              className="text-blue-500 hover:underline"
            >
              Daha Ətraflı
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-10">
        <button
          onClick={handleToggle}
          className="bg-slate-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300"
        >
          {isAllLoaded ? (
            <div className="flex flex-row items-center gap-2">
              Daha Az Gör <FiMinus />
            </div>
          ) : (
            <div className="flex flex-row items-center gap-2">
              Daha Çox Göstər <FiPlus />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
