import { useState } from "react";
import { BoxContainer } from "../Layout/boxContainer";
import { CelebrationCard } from "./Card/celebrationCard";

export const StaffCelebrationsComponents = () => {
  const tabs = ["Birthdays", "Jobs Anniversary", "New Hire"];
  const [current, setCurrent] = useState(0);
  return (
    <BoxContainer cls="pb-0 my-3">
      <h3 className="text-xl text-[#171717] font-semibold">Celebrations</h3>
      <div
        style={{
          boxShadow: "-4px 5px 8px 0px #EDEDED5E inset",
        }}
        className="mt-3 gap-1 flex text-center bg-[#E1E1E1] h-[42px] px-1 rounded-full items-center justify-between"
      >
        {tabs.map((tab, tabIndex) => (
          <button
            onClick={() => setCurrent(tabIndex)}
            className={`text-center text-[9px] md:text-xs px-2 md:px-3 ${
              current === tabIndex ? "bg-white text-[#171717]" : "text-[#878787]"
            }  font-semibold rounded-full py-2`}
            key={tabIndex}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="my-3 h-full px-2 overflow-auto">
        <p className="text-base font-semibold text-[#878787]">Today</p>
        <section className="my-3 ">
          {Array.from({ length: 3 }).map((arr, arrIndex) => (
            <CelebrationCard key={arrIndex} data={arr} />
          ))}
        </section>
        <div role="button" className="flex items-center justify-between">
          <p className="text-base font-semibold text-[#878787]">Upcoming</p>

          <svg
            width="17"
            height="10"
            viewBox="0 0 17 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.11284 9.3649L15.8764 2.86991C15.9886 2.76324 16.0776 2.63632 16.1384 2.49648C16.1992 2.35665 16.2305 2.20666 16.2305 2.05517C16.2305 1.90368 16.1992 1.7537 16.1384 1.61386C16.0776 1.47402 15.9886 1.34711 15.8764 1.24043C15.6521 1.0267 15.3487 0.906738 15.0324 0.906738C14.7162 0.906738 14.4128 1.0267 14.1885 1.24043L8.20305 6.92067L2.27748 1.24043C2.05319 1.0267 1.74979 0.906738 1.43354 0.906738C1.11728 0.906738 0.813882 1.0267 0.589593 1.24043C0.476482 1.34671 0.386497 1.47345 0.324851 1.6133C0.263206 1.75316 0.231126 1.90335 0.230468 2.05517C0.231126 2.207 0.263206 2.35719 0.324851 2.49704C0.386497 2.6369 0.476482 2.76364 0.589593 2.86991L7.35312 9.3649C7.46522 9.48138 7.60127 9.57434 7.7527 9.63792C7.90413 9.7015 8.06766 9.73432 8.23298 9.73432C8.3983 9.73432 8.56183 9.7015 8.71326 9.63792C8.86469 9.57434 9.00074 9.48138 9.11284 9.3649Z"
              fill="#878787"
            />
          </svg>
        </div>
      </div>
    </BoxContainer>
  );
};
