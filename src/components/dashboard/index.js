import { CustomWrapper } from "@/components/Layout/customLayout";
import { DashboardLayout } from "../Layout/dashboardLayout";
import { SearchComponent } from "./searchComponent";
import { StaffChart } from "./charts/staffChart";
import { BoxContainer } from "../Layout/boxContainer";
import { StaffCelebrationsComponents } from "./staffCelebrationsComponent";
import { GenderStaffChart } from "./charts/genderChartComponent";
import { LeaveCard } from "./Card/leaveCard";
import { leaveData } from "@/data/leaveData";
import { PeopleChart } from "./charts/peopleCharts";
import { TurnoverChart } from "./charts/turnoverChat";
import Dropdown from "../dropdown";
import { useState } from "react";
import { SearchDropdown } from "../dropdown/searchDropdown";
import Head from "next/head";

export const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [searchResultTab, setSearchResultTab] = useState(false);

  return (
    <>
      <Head>
        <title>BizEdge HR</title>
        <meta name="Description" content="BizEdge HR - Payroll made easy for Businesses" />
      </Head>
      <section className="w-full relative bg-white">
        <CustomWrapper>
          <DashboardLayout>
            <SearchComponent handleIsSearch={setSearchResultTab} />
            <div className="my-6 grid-cols-2 lg:flex justify-between items-start gap-3">
              <section>
                <div className="rounded py-3 relative overflow-hidden   bg-[#F8F8F8]">
                  <p className="font-semibold  px-3 text-base text-[#545454]">Total Employees</p>
                  <div className="bg-[#E1E1E1]  w-full flex px-2 relative top-3 h-14 mt-7 bg opacity items-end py-2 justify-between">
                    <button className="text-sm font-semibold text-[#2898A4] underline ">
                      View all employees
                    </button>
                    <h3 className="text-[#545454] font-semibold text-[28px] -mb-2 ">36</h3>
                  </div>
                </div>
                <BoxContainer cls="my-3">
                  <p className="text-xs text-center text-[#878787] font-medium">
                    27, Monday January, 2021
                  </p>
                  <h3 className="font-semibold text-center  text-xl text-[#545454] rounded">
                    Today’s Attendance{" "}
                  </h3>

                  <StaffChart />
                  <div className="border-b  border-[#F2F2F2] mt-5"></div>
                  <p className="font-semibold text-xs text-[#2898A4] text-center mt-1">
                    View In Time & Attendance
                  </p>
                </BoxContainer>
                <StaffCelebrationsComponents />
                <GenderStaffChart />
              </section>
              <section className="mt-3 md:mt-0">
                <BoxContainer>
                  <div className="flex items-center flex-wrap gap-3 justify-between mb-4 relative">
                    <div>
                      <h3 className="text-xl text-[#171717] font-semibold">People On Leave</h3>
                      <p className="text-sm text-[#545454]">View employees on leave at a glance.</p>
                    </div>

                    <Dropdown open={open} setIsOpen={setOpen} />
                  </div>
                  <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-2">
                    {leaveData.map((dta, dtaIndex) => (
                      <LeaveCard key={dtaIndex} dta={dta} />
                    ))}
                  </section>
                  {/* <Dropdown open={open} setIsOpen={setOpen} /> */}
                </BoxContainer>
                <PeopleChart />
                <TurnoverChart />
              </section>
            </div>
            {searchResultTab && <SearchDropdown handleIsSearch={setSearchResultTab} />}
          </DashboardLayout>
        </CustomWrapper>
      </section>
    </>
  );
};
