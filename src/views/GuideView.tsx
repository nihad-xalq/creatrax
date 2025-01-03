import React from "react";
import { GuideItem } from "@/types/guideTypes";

interface GuideViewProps {
  data: GuideItem[];
}

export const GuideView: React.FC<GuideViewProps> = ({ data }) => {
  return (
    <section className="lg:px-6">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-4 lg:mb-12 text-gray-900">
        İstifadəçi Rəhbəri
      </h1>
      <ul className="space-y-10">
        {data.map((item) => (
          <li
            key={item.id}
            className="bg-white p-6 lg:p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-6 mb-3 lg:mb-6">
              <div className="w-8 lg:w-12 h-8 lg:h-12 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold text-xl">
                {item.id}
              </div>
              <h2 className="text-xl md:text-3xl font-semibold text-gray-900">
                {item.title}
              </h2>
            </div>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-4 lg:mb-8">
              {item.description}
            </p>
            {item.steps && (
              <ol className="mt-4 space-y-4 list-decimal list-inside text-gray-800">
                {item.steps.map((step, index) => (
                  <li
                    key={index}
                    className="p-4 bg-gray-100 rounded-md border border-gray-300 shadow-sm hover:bg-gray-200 transition-all duration-200"
                  >
                    {step}
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
