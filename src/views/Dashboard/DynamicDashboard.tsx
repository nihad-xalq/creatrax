import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface DataType {
  name: string;
  value: number;
}

interface IDynamicDashboardProps {
  data: DataType[];
  title: string;
}

export const DynamicDashboard: React.FC<IDynamicDashboardProps> = ({
  data,
  title,
}) => (
  <div className="flex flex-col items-center gap-3">
    <h2 className="text-2xl font-medium">{title}</h2>
    <BarChart
      width={500}
      height={300}
      data={data}
      style={{ fontSize: "14px", fontWeight: "300" }}
      className="w-full"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#026beb" />
    </BarChart>
  </div>
);
