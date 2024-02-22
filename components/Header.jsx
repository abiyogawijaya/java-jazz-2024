export default function Header({children,progress}) {
  return (
    <>
      <div className="flex justify-center font-primary">
        <h1 className="font-semibold text-base p-3">{children}</h1>
      </div>
      <div className="w-full bg-[#EFF2F7] h-1 relative">
        {progress === "30%" && <div className={`bg-[#F15A23] h-1 absolute w-[30%] rounded-r-lg`} />}
        {progress === "50%" && <div className={`bg-[#F15A23] h-1 absolute w-[50%] rounded-r-lg`} />}
        {progress === "100%" && <div className={`bg-[#F15A23] h-1 absolute w-[100%] rounded-r-lg`} />}
      </div>
    </>
  );
}
