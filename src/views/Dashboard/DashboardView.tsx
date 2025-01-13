"use client";

import { MantineRadialBarChart } from "./MantineRadialBarChart";
import { MantineLineChart } from "./MantineLineChart";
import { MantineBarChart } from "./MantineBarChart";
import { MantinePieChart } from "./MantinePieChart";

export const DashboardView = () => {
  return (
    <section className="dashboard-container w-full mb-20 willFadeFromAbove">
      <div className="dashboard-inner flex flex-col gap-5 w-full mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900">Statistikalar</h1>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Müştərilər və Sifarişlər
            </h2>
            <MantineBarChart />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-[0_0_10px_10px_rgba(0_0_0_#000)] flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Xidmətlərin Bölüşdürülməsi
            </h2>
            <MantinePieChart />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-[0_0_10px_10px_rgba(0_0_0_#000)] flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Xidmətlərin Bölüşdürülməsi
            </h2>
            <MantineLineChart />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-[0_0_10px_10px_rgba(0_0_0_#000)] flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Test Bölüşdürülməsi
            </h2>
            <MantineRadialBarChart />
          </div>
        </div>
      </div>
    </section>
  );
};
