import { BarChart } from "@mantine/charts";

export const data = [
  { month: "Yanvar", Konsaltinq: 1200, Tikinti: 900, Zinət: 200 },
  { month: "Fevral", Konsaltinq: 1900, Tikinti: 1200, Zinət: 400 },
  { month: "Mart", Konsaltinq: 400, Tikinti: 1000, Zinət: 200 },
  { month: "Aprel", Konsaltinq: 1000, Tikinti: 200, Zinət: 800 },
  { month: "May", Konsaltinq: 800, Tikinti: 1400, Zinət: 1200 },
  { month: "İyun", Konsaltinq: 750, Tikinti: 600, Zinət: 1000 },
  { month: "İyul", Konsaltinq: 1500, Tikinti: 1100, Zinət: 1300 },
  { month: "Avqust", Konsaltinq: 1800, Tikinti: 1400, Zinət: 1600 },
  { month: "Sentyabr", Konsaltinq: 1600, Tikinti: 1200, Zinət: 1000 },
  { month: "Oktyabr", Konsaltinq: 1400, Tikinti: 1000, Zinət: 800 },
  { month: "Noyabr", Konsaltinq: 1200, Tikinti: 800, Zinət: 600 },
  { month: "Dekabr", Konsaltinq: 1000, Tikinti: 600, Zinət: 400 },
];

export const MantineBarChart = () => {
  return (
    <BarChart
      className="!w-full !h-full min-h-[350px]"
      data={data}
      dataKey="month"
      withLegend={true}
      series={[
        { name: "Konsaltinq", color: "violet.6" },
        { name: "Tikinti", color: "blue.6" },
        { name: "Zinət", color: "teal.6" },
      ]}
      tooltipAnimationDuration={500}
    />
  );
};
