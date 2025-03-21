import { LineChart } from "@mantine/charts";
import { useState } from "react";

type Range = "günlük" | "həftəlik" | "aylıq" | "illik"

export const MantineLineChart = ({ data }) => {
  const [timeRange, setTimeRange] = useState<Range>("günlük");

  const getFilteredData = (): { date: string; Xərclər: number; Gəlirlər: number }[] => {
    const groupedData: Record<string, { date: string; Xərclər: number; Gəlirlər: number }> = {};

    data.forEach(({ date, Gəlirlər, Xərclər }) => {
      const dateObj = new Date(date);
      let key: string;

      switch (timeRange) {
        case "günlük":
          key = date;
          break;
        case "həftəlik":
          const startOfWeek = new Date(
            dateObj.setDate(dateObj.getDate() - dateObj.getDay())
          )
            .toISOString()
            .split("T")[0];
          key = startOfWeek;
          break;
        case "aylıq":
          key = `${dateObj.getFullYear()}-${String(
            dateObj.getMonth() + 1
          ).padStart(2, "0")}`;
          break;
        case "illik":
          key = `${dateObj.getFullYear()}`;
          break;
        default:
          key = date;
      }

      if (!groupedData[key]) {
        groupedData[key] = { date: key, Xərclər: 0, Gəlirlər: 0 };
      }

      groupedData[key].Xərclər += Xərclər;
      groupedData[key].Gəlirlər += Gəlirlər;
    });

    return Object.values(groupedData);
  };

  const series = Object.keys(data[0])
    .filter((key) => key !== "date")
    .map((key, index) => ({
      name: key,
      color: ["teal.6", "red.6", "blue.6", "indigo.6", "green.6"][index % 5],
    }));

  return (
    <div className="flex flex-col gap-4">

      <div className="time_range_buttons flex justify-end gap-2">
        {(["günlük", "həftəlik", "aylıq", "illik"] as Range[]).map((range) => (
          <button
            key={range}
            onClick={() => setTimeRange(range as Range)}
            className={`px-3 py-1 text-sm rounded-md transition active:scale-90 ${timeRange === range ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            {range.charAt(0).toUpperCase() + range.slice(1)}
          </button>
        ))}
      </div>

      <LineChart
        key={timeRange}
        h={300}
        data={getFilteredData()}
        dataKey="date"
        series={series}
        curveType="natural"
        withLegend
      />

    </div>
  );
};
