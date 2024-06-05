export const CustomWrapper = ({ children }) => {
  return (
    <div className="mx-auto  max-w-[750px] px-3 md:max-w-[700px] lg:max-w-[1200px] ">
      {children}
    </div>
  );
};
