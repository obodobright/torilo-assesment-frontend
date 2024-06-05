import { BoxContainer } from "@/components/Layout/boxContainer";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartIndicator } from "./staffChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const GenderStaffChart = () => {
  const chartData = {
    labels: ["Male", "Female", "Not specified"],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ["#ADE5EB", "#FCDC9C", "#FF9999"],
      },
    ],
  };

  const options = {
    elements: {
      center: {
        text: "360",
        color: "#000000", // text color
        fontStyle: "Arial", // font style
        sidePadding: 20, // padding around the center text
      },
    },
    maintainAspectRatio: true,
    width: 500,
    height: 500,
    plugins: {
      legend: null,
    },
  };
  return (
    <BoxContainer>
      <div className="mb-7">
        <h3 className="text-xl text-[#171717] font-semibold">Employee Gender Distribution </h3>
        <p className="text-sm text-[#545454]">Here is a breakdown of gender distribution</p>
      </div>
      <div className="  flex items-center justify-center h-[250px]">
        <Doughnut options={options} data={chartData} />
      </div>
      <div className="flex items-center justify-center gap-6 mt-4">
        <ChartIndicator indicator="Male" bg="#ADE5EB" />
        <ChartIndicator indicator="Female " bg="#FCDC9C" />
        <ChartIndicator indicator="Not Specified " bg="#FF9999 " />
      </div>
    </BoxContainer>
  );
};
