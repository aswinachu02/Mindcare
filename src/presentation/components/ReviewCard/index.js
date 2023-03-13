import React from "react";
import Star from "../../assets/star.svg";

const ReviewCard = ({ children, No, Date = "" }) => {
  return (
    <div className="flex items-start w-11/12 my-4 ml-3 ">
      <div className="flex items-center justify-center bg-[#FAEAD3] h-[25px] w-[35px] py-[2px] px-[10px] rounded">
        {No} <img src={Star} className="ml-[2px] w-3 h-3" />
      </div>
      <div className="flex flex-col ml-5">
        <div className=" text-xs font-medium text-[#23384E]">{children}</div>
        <div className=" text-[#5B5E68] text-xs font-normal mt-2">{Date}</div>
      </div>
    </div>
  );
};

export default ReviewCard;
