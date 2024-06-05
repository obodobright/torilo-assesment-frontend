export const BoxContainer = ({ children, cls }) => {
  return (
    <div
      style={{ boxShadow: "0px 4px 22px 0px #0000000F" }}
      className={` my- rounded-[15px] border py-3 px-2 md:px-5 border-[#E1E1E1] ${cls}`}
    >
      {children}
    </div>
  );
};
