import { headerData } from "@/data/headerData";
import { CustomWrapper } from "../Layout/customLayout";
import { ArrowDownIcon, LogoIcon } from "../icons";
import { UserProfileTab } from "../Profile";

export const Header = () => {
  return (
    <nav className="w-full px-3 md:px-0  bg-white border-b border-[#E1E1E1]">
      <CustomWrapper>
        <header className="w-full h-16 flex  items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <LogoIcon />
            <div className="bg-[#F2F2F2] py-2 px-3 rounded-[61px] flex items-center gap-2 ">
              <div className="w-5 h-5 flex items-center justify-center bg-[#CCF3FF] rounded ">
                <span className="text-xs text-[#009CCC]">%</span>
              </div>
              <span className="text-[#878787] text-sm font-bold">People</span>
              <ArrowDownIcon />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-8 items-center">
              {headerData.map((nav, navIndex) => (
                <li role="button" key={navIndex}>
                  {nav.icon}
                </li>
              ))}
            </ul>
            <UserProfileTab />
          </div>
          <div className="flex md:hidden">
            <UserProfileTab />
          </div>
        </header>
      </CustomWrapper>
    </nav>
  );
};
