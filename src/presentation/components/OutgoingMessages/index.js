import React from "react";
import Recieved from "../../assets/recieved.svg";

const OutgoingMessages = ({ children, time = "" }) => {
  return (
    <div className=" flex flex-col items-end w-full my-2">
      <div className="flex flex-col w-[78%] bg-[#E3DCD3]  rounded-bl-lg rounded-br-lg rounded-tl-lg rounded-tr-none">
        <p className="text-[#282A39] text-xs ml-[16px] mr-[4px] mt-2 mb-1 text-left">
          {children}
        </p>
        <div className="flex items-center justify-end ">
          <p className=" text-[#404252] text-[11px] mx-[6px] mb-1 text-right">
            {time}
          </p>
          <img
            alt="recieved"
            src={Recieved}
            className="w-[12px] h-[7px] mr-[6px] mb-1"
          />
        </div>
      </div>
    </div>
  );
};

export default OutgoingMessages;
