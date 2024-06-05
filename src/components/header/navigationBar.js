import { navData } from "@/data/headerData";
import { CustomWrapper } from "../Layout/customLayout";
import { useState } from "react";

export const NaviationBar = () => {
  const [current, setCurrent] = useState(0);

  return (
    <nav className="w-full  overflow-y-auto    border-b border-[whitesmoke]">
      <CustomWrapper>
        <ul className="flex py- pt-4 px-2 items-center justify-between">
          {navData.map((nav, navIndex) => (
            <li
              onClick={() => setCurrent(navIndex)}
              role="button"
              className={`px-3 py-1 ${
                current === navIndex
                  ? "bg-[#EAF8FA] rounded-t-xl rounded-tr-xl border-b border-[#2898A4] text-[#2898A4] font-medium text-base"
                  : "font-normal text-base text-[#545454]"
              }`}
              key={navIndex}
            >
              {nav.name}
            </li>
          ))}
        </ul>
      </CustomWrapper>
    </nav>
  );
};
