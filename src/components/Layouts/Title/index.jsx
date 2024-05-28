const Title = ({ title, subtitle }) => {
  return (
    <div className="w-full flex flex-col text-center justify-center items-center">
      <h2 className="text-3xl tracking-wider font-bold">{title}</h2>
      <div className="w-7 h-1 bg-[#7843E9] rounded-full my-5"></div>
      <p className="text-lg text-center mb-28">{subtitle}</p>
    </div>
  );
};

export default Title;
