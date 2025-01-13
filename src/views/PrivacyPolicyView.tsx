import React from "react";
import { PrivacyPolicyItem } from "@/types/privacyPolicyTypes";

interface PrivacyPolicyViewProps {
  data: PrivacyPolicyItem[];
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({
  data,
}) => {
  return (
    <div className="px-0 lg:px-6 min-h-screen willFadeFromAbove">
      <h1 className="md:text-5xl text-center mb-6 lg:mb-12 text-4xl text-gray-900 font-semibold">
        Məxfilik Siyasəti
      </h1>
      <ul className="space-y-6 sm:space-y-12">
        {data.map((item) => (
          <li
            key={item.id}
            className="bg-white p-4 lg:p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="w-8 lg:w-14 h-8 lg:h-14 bg-green-600 text-white flex items-center justify-center rounded-full font-bold text-xl shadow-md">
                {item.id}
              </div>
              <h2 className="text-xl lg:text-3xl font-semibold text-gray-900">
                {item.title}
              </h2>
            </div>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
              {item.description}
            </p>
            {item.details && (
              <ul className="mt-4 space-y-4 list-disc list-inside text-gray-800">
                {item.details.map((detail, index) => (
                  <li
                    key={index}
                    className="p-4 bg-gray-100 rounded-md border border-gray-300 shadow-sm hover:bg-gray-200 transition-all duration-200"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
