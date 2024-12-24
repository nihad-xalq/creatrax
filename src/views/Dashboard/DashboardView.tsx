"use client";

// import { DynamicDashboard } from "./DynamicDashboard";
import { TwoSideBarChart } from "./TwoSideBarChart";
import { CPieChart } from "./CPieChart";

// interface DataType {
//   name: string;
//   value: number;
// }

// const ordersData: DataType[] = [
//   { name: "Jan", value: 30 },
//   { name: "Feb", value: 20 },
//   { name: "Mar", value: 2 },
//   { name: "Apr", value: 25 },
//   { name: "May", value: 25 },
//   { name: "Jun", value: 5 },
//   { name: "Jul", value: 15 },
//   { name: "Aug", value: 30 },
//   { name: "Sep", value: 35 },
//   { name: "Oct", value: 30 },
//   { name: "Nov", value: 25 },
//   { name: "Dec", value: 12 },
// ];

// const clientsData: DataType[] = [
//   { name: "Jan", value: 3 },
//   { name: "Feb", value: 2 },
//   { name: "Mar", value: 2 },
//   { name: "Apr", value: 5 },
//   { name: "May", value: 2 },
//   { name: "Jun", value: 8 },
//   { name: "Jul", value: 15 },
//   { name: "Aug", value: 12 },
//   { name: "Sep", value: 1 },
//   { name: "Oct", value: 7 },
//   { name: "Nov", value: 10 },
//   { name: "Dec", value: 12 },
// ];

// const revenueData: DataType[] = [
//   { name: "Jan", value: 1000 },
//   { name: "Feb", value: 5000 },
//   { name: "Mar", value: 1500 },
//   { name: "Apr", value: 2700 },
//   { name: "May", value: 850 },
//   { name: "Jun", value: 1400 },
//   { name: "Jul", value: 1500 },
//   { name: "Aug", value: 3200 },
//   { name: "Sep", value: 1100 },
//   { name: "Oct", value: 7000 },
//   { name: "Nov", value: 150 },
//   { name: "Dec", value: 1200 },
// ];

export const DashboardView = () => {
  return (
    <section className="dashboard-container">
      <div className="dashboard-inner flex flex-col gap-6">
        <h1 className="text-4xl font-semibold">Dashboard</h1>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TwoSideBarChart />

          <CPieChart />

          {/* <DynamicDashboard title="Orders" data={ordersData} /> */}
          {/* <DynamicDashboard title="Clients" data={clientsData} /> */}
          {/* <DynamicDashboard title="Revenue" data={revenueData} /> */}
        </div>
      </div>
    </section>
  );
};
