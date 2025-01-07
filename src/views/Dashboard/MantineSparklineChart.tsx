import { Sparkline } from "@mantine/charts";

export const MantineSparklineChart = () => {
  return (
    <Sparkline
      w={300}
      h={100}
      data={[10, 20, 40, 20, 40, 10, 50]}
      curveType="linear"
      color="blue"
      fillOpacity={0.6}
      strokeWidth={2}
      my="auto"
    />
  );
};
