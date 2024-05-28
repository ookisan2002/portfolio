const CustomeTag = ({ children }) => {
  return (
    <div className="h-[42px] text-center flex align-middle rounded-md w-fit py-2 px-4 bg-[#99999933] text-slate-600 text-sm font-semibold mb-[14px] mr-[14px]">
      {children}
    </div>
  );
};

export default CustomeTag;
