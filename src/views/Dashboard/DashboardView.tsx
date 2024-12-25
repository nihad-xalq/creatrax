"use client";

import { TwoSideBarChart } from "./TwoSideBarChart";
import { CPieChart } from "./CPieChart";

export const DashboardView = () => {
  return (
    <section className="dashboard-container bg-gray-50 py-10">
      <div className="dashboard-inner flex flex-col gap-12 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl text-center font-semibold text-gray-800">
          Qrafiklər
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Müştərilər və Sifarişlər
            </h2>
            <TwoSideBarChart />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Xidmətlərin Bölüşdürülməsi
            </h2>
            <CPieChart />
          </div>
        </div>
      </div>
    </section>
  );
};
