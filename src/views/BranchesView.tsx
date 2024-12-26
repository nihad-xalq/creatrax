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
    <div className="px-6 py-12 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900">
        Filiallar
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.slice(0, visibleCount).map((branch) => (
          <li
            key={branch.id}
            className="willSimplyFadeIn bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {branch.name}
            </h2>
            <p className="text-md text-gray-700 mb-4">{branch.location}</p>
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
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300"
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
