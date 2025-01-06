"use client";

// import { TwoSideBarChart } from "./TwoSideBarChart";
// import { CPieChart } from "./CPieChart";
import { MantineBarChart } from "./MantineBarChart";
import { MantinePieChart } from "./MantinePieChart";

export const DashboardView = () => {
  return (
    <section className="dashboard-container w-full mb-20">
      <div className="dashboard-inner flex flex-col gap-5 w-full mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900">Qrafiklər</h1>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Müştərilər və Sifarişlər
            </h2>
            {/* <TwoSideBarChart /> */}
            <MantineBarChart />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Xidmətlərin Bölüşdürülməsi
            </h2>
            {/* <CPieChart /> */}
            <MantinePieChart />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Xidmətlərin Bölüşdürülməsi
            </h2>
            {/* <CPieChart /> */}
            <MantinePieChart />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Xidmətlərin Bölüşdürülməsi
            </h2>
            {/* <CPieChart /> */}
            <MantinePieChart />
          </div>
        </div>
      </div>
    </section>
  );
};
