import React from "react";

const IncomingMessages = ({ children, time = "" }) => {
  return (
    <div className=" flex flex-col items-start w-full my-2">
      <div className="flex flex-col w-[78%] bg-[#F9D7C4] text-left rounded-bl-lg rounded-br-lg rounded-tr-lg rounded-tl-none">
        <p className="text-[#282A39] text-xs ml-[8px] mr-[6px] mt-2 mb-1">
          {children}
        </p>
        <p className=" text-[#404252] text-[11px] mx-[6px] mb-1 text-right">
          {time}
        </p>
      </div>
    </div>
  );
};

export default IncomingMessages;
