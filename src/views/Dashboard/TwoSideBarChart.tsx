import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    müştərilər: 2,
    sifarişlər: 6,
    // amt: 2400,
  },
  {
    name: "Feb",
    müştərilər: 1,
    sifarişlər: 5,
    // amt: 2210,
  },
  {
    name: "Mar",
    müştərilər: 5,
    sifarişlər: 3,
    // amt: 2290,
  },
  {
    name: "Apr",
    müştərilər: 3,
    sifarişlər: 7,
    // amt: 2000,
  },
  {
    name: "May",
    müştərilər: 2,
    sifarişlər: 1,
    // amt: 2181,
  },
  {
    name: "Jun",
    müştərilər: 3,
    sifarişlər: 6,
    // amt: 2500,
  },
  {
    name: "Jul",
    müştərilər: 1,
    sifarişlər: 4,
    // amt: 2100,
  },
];

export const TwoSideBarChart = () => {
  return (
    <ResponsiveContainer width="80%" aspect={2}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barGap={3}
        barCategoryGap={10}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="sifarişlər"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="müştərilər"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
