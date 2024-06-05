/* eslint-disable @next/next/no-img-element */
export const LeaveCard = ({ dta }) => {
  return (
    <div
      style={{
        background: dta.bg,
      }}
      className="flex cursor-pointer items-center justify-center flex-col bg-[#FEF6E6] px-3 py-4 rounded-lg gap-2"
    >
      <img src="/assets/bizImg.png" className="w-8 h-8 object-cover" alt="" />
      <div className="text-center">
        <h3 className="text-sm text-[#171717] font-semibold">{dta.name}</h3>
        <p className="text-xs text-[#545454] font-normal">{dta.occupation}</p>
      </div>
      <div
        style={{
          background: dta.btnBg,
          color: dta.btnColor,
        }}
        className=" rounded-full py-1 font-semibold px-3 text-xs"
      >
        {`${dta.leaveType} leave`}
      </div>
      <div className="text-center">
        <p className="text-xs font-normal text-[#545454]">
          Start Date: <span className="font-semibold">Jan 23</span>
        </p>
        <p className="text-xs font-normal text-[#545454]">
          Resumption Date: <span className="font-semibold">Jan 23</span>
        </p>
      </div>
      <p className="text-xs text-[#545454] font-semibold">{dta.dayLeft} Day(s)</p>
    </div>
  );
};
