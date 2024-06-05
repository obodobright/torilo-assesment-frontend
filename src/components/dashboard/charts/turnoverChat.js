import { BoxContainer } from "@/components/Layout/boxContainer";
import { useState } from "react";
import { Line } from "react-chartjs-2";
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

export const TurnoverChart = () => {
  const tabs = ["People Per Department", "Turn Over"];
  const [current, setCurrent] = useState(0);

  const data = {
    labels: ["Tech", "Admin", "Customer Support", "Operations", "Frontdesk", "Backend"],
    datasets: [
      {
        label: "Male",
        backgroundColor: "#D4F2FD",
        data: [0, 0, 3, 7, 2, 1],
        borderColor: "#2898A4",
      },
      {
        label: "Female",
        backgroundColor: "#FCDC9C",
        data: [0, 0, 0, 2, 10, 2],
        borderColor: "#FF7272",
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
    <BoxContainer>
      <section>
        <div className="flex items-end justify-between flex-wrap gap-3">
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
                }   font-semibold rounded-full py-2 px-2 md:px-12`}
                key={tabIndex}
              >
                {tab}
              </button>
            ))}
          </div>
          <button className="h-10 text-sm font-semibold flex items-center justify-between gap-4 border bg-[#FAFAFA] rounded-md p-2 border-[#E1E1E1 ]">
            {" "}
            <span> 6 months</span>
            <svg
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8858 1.03832L7.02499 5.89917L2.16414 1.03832C1.67555 0.549727 0.886284 0.549727 0.397693 1.03832C-0.0908977 1.52691 -0.0908977 2.31617 0.397693 2.80476L6.14803 8.5551C6.63662 9.04369 7.42588 9.04369 7.91447 8.5551L13.6648 2.80476C14.1534 2.31617 14.1534 1.52691 13.6648 1.03832C13.1762 0.562255 12.3744 0.549727 11.8858 1.03832Z"
                fill="#878787"
              />
            </svg>
          </button>
        </div>
        <div className="my-4">
          <Line data={data} options={options} />
        </div>
      </section>
    </BoxContainer>
  );
};
