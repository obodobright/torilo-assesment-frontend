import { useClickOutside } from "@/hooks/useClickOutside";

/* eslint-disable @next/next/no-img-element */
export const SearchDropdown = ({ handleIsSearch }) => {
  const dropdownRef = useClickOutside(handleIsSearch);

  return (
    <section
      ref={dropdownRef}
      style={{
        boxShadow: "1px 5px 22px 4px #00000026",
      }}
      className="bg-white py-3 px-2 top-12 z-50 w- w-5/6  md:w-[48.5%] rounded-[15px] absolute h-[300px] overflow-x-auto "
    >
      <p className="font-semibold text-[#A8A8A8] text-base">Search Results</p>
      <div className="mt-3 px-3">
        {Array.from({ length: 5 }).map((result, resultIndex) => (
          <SearchCardResult key={resultIndex} data={result} />
        ))}
      </div>
    </section>
  );
};

export const SearchCardResult = () => {
  return (
    <div className="border-b my-2 flex items-center justify-start gap-2 pb-2 border-[#E1E1E1]">
      <img src="/assets/bizImg.png" alt="search-result-img" className="w-9" />
      <div className="flex items-start flex-col justify-start">
        <h3 className="text-base font-semibold text-[#545454]">John Micheal</h3>
        <p className="font-normal text-xs text-[#545454]">Lead Designer</p>
      </div>
    </div>
  );
};
