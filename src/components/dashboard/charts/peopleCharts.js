import { BoxContainer } from "@/components/Layout/boxContainer";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
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
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const PeopleChart = () => {
  const tabs = ["People Per Department", "Turn Over"];
  const [current, setCurrent] = useState(0);

  const data = {
    labels: ["Tech", "Admin", "Customer Support", "Operations", "Frontdesk", "Backend"],
    datasets: [
      {
        label: "Male",
        backgroundColor: "#D4F2FD",
        data: [0, 0, 3, 7, 2, 1],
        stack: "Stack 0",
      },
      {
        label: "Female",
        backgroundColor: "#FCDC9C",
        data: [0, 0, 0, 2, 10, 2],
        stack: "Stack 0",
      },
    ],
  };

  const options = {
    plugins: {
      legend: null,
      title: {
        display: false,
        text: "Chart.js Bar Chart - Stacked",
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        ticks: {
          min: 0,
          stepSize: 10,
          max: 100,
        },
      },
    },
  };

  return (
    <BoxContainer cls="my-3">
      <section>
        <div
          style={{
            boxShadow: "-4px 5px 8px 0px #EDEDED5E inset",
          }}
          className="mt-3 gap-1 flex text-center bg-[#E1E1E1] h-[44px] px-1 rounded-full items-center justify-between"
        >
          {tabs.map((tab, tabIndex) => (
            <button
              onClick={() => setCurrent(tabIndex)}
              className={`text-center text-xs md:text-base ${
                current === tabIndex ? "bg-white text-[#171717]" : "text-[#878787]"
              } w-full font-semibold rounded-full py-2`}
              key={tabIndex}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="my-4">
          <Bar data={data} options={options} />
        </div>
        <div className="flex items-center justify-center gap-12 mt-4">
          <ChartIndicator indicator="Male" bg="#ADE5EB" />
          <ChartIndicator indicator="Female " bg="#FCDC9C" />
        </div>
      </section>
    </BoxContainer>
  );
};
