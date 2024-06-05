import { CakeIcon } from "@/components/icons";
import Image from "next/image";

export const CelebrationCard = () => {
  return (
    <div className="bg-[#EBEFFA] my-2 rounded-[50px] flex items-center justify-between py-2 px-3">
      <div className="flex items-center justify-start gap-3">
        <Image width={50} height={50} className=" object-cover" src="/assets/bizImg.png" alt="" />
        <div>
          <h3 className="text-sm text-[#545454] font-semibold">John Micheal</h3>
          <p className="text-xs font-normal text-[#545454]">Leader Designer</p>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <CakeIcon />
        <p className="text-[#171717] text-sm">Jan 23</p>
      </div>
    </div>
  );
};
