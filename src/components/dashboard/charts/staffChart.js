export const StaffChart = () => {
  return (
    <section>
      <div className="w-full h-6 rounded-full mt-4 overflow- bg-[#FCE2AF] relative">
        <div className=" w-2/3 rounded-full  h-6 z-20 absolute top-0 bg-[#C2D4FF]"></div>
        <div className=" w-11/12 h-6 rounded-full  absolute top-0 bg-[#FFE7E7]"></div>
      </div>
      <div className="flex items-center justify-center gap-6 mt-4">
        <ChartIndicator indicator="Present" bg="#C2D4FF" />
        <ChartIndicator indicator="Absent " bg="#FFE7E7" />
        <ChartIndicator indicator="Out of Work " bg="#FCE2AF" />
      </div>
    </section>
  );
};

export const ChartIndicator = ({ bg, indicator }) => {
  return (
    <div className="flex items-center gap-3 ">
      <div style={{ background: bg }} className="w-4 h-4 rounded-sm"></div>
      <span className="font-normal text-xs text-[#545454]">{indicator}</span>
    </div>
  );
};
