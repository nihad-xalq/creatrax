"use client";

import { MantineModal } from "@/components/ui/MantineModal";
import { PageTitle } from "@/components/PageTitle";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Branch } from "@/types/branchesTypes";
import { useState } from "react";

interface BranchesViewProps {
  data: Branch[];
}

export const BranchesView: React.FC<BranchesViewProps> = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleToggle = () => {
    if (visibleCount >= data.length) {
      setVisibleCount(6);
    } else {
      setVisibleCount((prev) => prev + 6);
    }
  };

  const isAllLoaded = visibleCount >= data.length;

  return (
    <section className="branchesSection">
      <PageTitle title="Filiallar" />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 willFadeFromAbove">
        {data.slice(0, visibleCount).map((branch) => (

          <MantineModal
            key={branch.id}
            title={branch.name}
            content={
              <div
                className="willSimplyFadeIn bg-white p-5 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
              >
                <p className="text-md text-gray-700 font-light mb-2">
                  {branch.location}
                </p>
              </div>
            }
            btnStyle="bg-white p-1 rounded-md border-l-4 border-blue-500 shadow-sm hover:shadow-md transition duration-200 w-full h-full flex"
            triggerLabel={
              <li
                key={branch.id}
                className="willSimplyFadeIn p-5 w-full"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {branch.name}
                </h2>
                {/* <p className="text-md text-gray-700 font-light mb-2">
                  {branch.location}
                </p> */}
              </li>
            }
          />

        ))}
      </ul>

      <div className="flex justify-center mt-10">
        <button
          onClick={handleToggle}
          className="bg-slate-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300"
        >
          {isAllLoaded ? (
            <div className="flex flex-row items-center gap-2">
              Daha Az Göstər <FiMinus />
            </div>
          ) : (
            <div className="flex flex-row items-center gap-2">
              Daha Çox Göstər <FiPlus />
            </div>
          )}
        </button>
      </div>
    </section>
  );
};
