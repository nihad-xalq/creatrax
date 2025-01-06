import { PieChart } from "@mantine/charts";

export const data = [
  { name: "SMM", value: 400, color: "indigo.6" },
  { name: "Vebsayt", value: 1200, color: "yellow.6" },
  { name: "Targeting", value: 600, color: "teal.6" },
  { name: "Reels", value: 250, color: "gray.6" },
];

export const MantinePieChart = () => {
  return (
    <PieChart
      data={data}
      withTooltip
      tooltipDataSource="segment"
      m="auto"
      size={200}
      withLabels
      tooltipAnimationDuration={1500}
    ></PieChart>
  );
};
