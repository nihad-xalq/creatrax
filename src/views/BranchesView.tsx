"use client";

import { MantineModal } from "@/components/ui/MantineModal";
import { PageTitle } from "@/components/PageTitle";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Branch } from "@/types/branchesTypes";
import { useState } from "react";
import Image from "next/image";

interface BranchesViewProps {
  data: Branch[];
}

export const BranchesView: React.FC<BranchesViewProps> = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleToggle = () => {
    if (visibleCount >= data.length) {
      setVisibleCount(8);
    } else {
      setVisibleCount((prev) => prev + 4);
    }
  };

  const isAllLoaded = visibleCount >= data.length;

  return (
    <section className="branchesSection">
      <PageTitle title="Filiallar" />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 willFadeFromAbove">
        {data.slice(0, visibleCount).map((branch) => (

          <MantineModal
            key={branch.id}
            title={branch.name}
            content={
              <div
                className="willSimplyFadeIn p-3 rounded-xl flex flex-col gap-3"
              >
                {/* TODO: Consider slideshow of branch pics here */}
                <Image src={branch.imageUrl} alt={branch.name} width={0} height={0} sizes="100vw" className="w-full h-auto rounded-[4px]" />
                <p className="text-md text-gray-700 font-light mb-2">
                  {branch.location}
                </p>
              </div>
            }
            btnStyle="bg-white p-1 rounded-md border-l-4 border-blue-500 shadow-sm hover:shadow-md transition duration-200 w-full h-full flex"
            triggerLabel={
              <li
                key={branch.id}
                className="willSimplyFadeIn w-full flex flex-col items-center gap-3"
              >
                <Image src={branch.imageUrl} alt={branch.name} width={0} height={0} sizes="100vw" className="w-full h-auto rounded-[4px]" />
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {branch.name}
                </h2>
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
