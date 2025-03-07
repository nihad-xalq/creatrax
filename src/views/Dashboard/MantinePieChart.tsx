import { PieChart } from "@mantine/charts";

interface IMantinePieChart {
  data: Array<{ name: string; value: number; color: string }>;
}

export const MantinePieChart = ({ data }: IMantinePieChart) => {
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
