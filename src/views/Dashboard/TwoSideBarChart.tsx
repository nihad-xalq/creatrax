import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", müştərilər: 2, sifarişlər: 6 },
  { name: "Feb", müştərilər: 1, sifarişlər: 5 },
  { name: "Mar", müştərilər: 5, sifarişlər: 3 },
  { name: "Apr", müştərilər: 3, sifarişlər: 7 },
  { name: "May", müştərilər: 2, sifarişlər: 1 },
  { name: "Jun", müştərilər: 3, sifarişlər: 6 },
  { name: "Jul", müştərilər: 1, sifarişlər: 4 },
];

export const TwoSideBarChart = () => {
  return (
    <ResponsiveContainer width={600} aspect={2} className="max-w-full">
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        barGap={8}
        barCategoryGap={15}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sifarişlər" fill="#8884d8" />
        <Bar dataKey="müştərilər" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};
