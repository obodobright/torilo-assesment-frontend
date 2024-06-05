export const SearchComponent = ({ handleIsSearch }) => {
  return (
    <form action="" className="md:flex items-center justify-between">
      <input
        onFocus={() => handleIsSearch(true)}
        type="text"
        className="border w-full md:w-3/5  h-10 rounded outline-none border-[#E1E1E1] bg-[#F2F2F2] px-3"
        placeholder="John"
      />
      <div className="flex items-center mt-4 md:mt-0 gap-2">
        <button className="h-10 rounded-lg w-full md:w-auto md:rounded-s-lg px-4 md:px-12 bg-[#2898A4] text-white text-base font-semibold">
          Add New
        </button>
        <div className="h-10 px-4 rounded-e-lg hidden md:flex items-center justify-center bg-[#2898A4]">
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.465481 0.922572C0.152131 1.23592 0.152131 1.74112 0.465481 2.05447L5.77963 7.36861C6.02903 7.61801 6.43191 7.61801 6.68131 7.36861L11.9955 2.05447C12.3088 1.74112 12.3088 1.23592 11.9955 0.922572C11.6821 0.609223 11.1769 0.609223 10.8636 0.922572L6.22727 5.55247L1.59098 0.916178C1.28403 0.609224 0.772435 0.609223 0.465481 0.922572Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </form>
  );
};
