import React from "react";
import Percentage from "../../assets/percentage.svg";

import FeatherIcon from "feather-icons-react";

const Packages = ({
  title,
  percentage,
  video,
  week,
  fakeprice,
  price,
  ismostpopular,
}) => {
  return (
    <div className=" flex flex-col min-h-[100px] p-[25px] my-4 rounded-lg shadow-lg ">
      <div className="flex justify-between">
        <div className="flex">
          <h2 className=" text-lg font-medium">{title}</h2>
          {ismostpopular === true ? (
            <div className="flex min-w-[95px] ml-2 items-center justify-center bg-themeColor rounded-full text-white text-xs font-normal ">
              <p>Most Popular</p>
            </div>
          ) : null}
        </div>
        <div className="flex items-center">
          <img
            alt="percentage"
            src={Percentage}
            className="mr-[5px] w-[13px] h-[13]"
          />
          <p className=" text-xs font-medium text-[#404252]">
            {percentage}% OFF
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-xs mt-2">
          <FeatherIcon className="w-[17px] mr-2 text-[#273E56]" icon="users" />
          <p className=" font-medium">
            {video} video{" "}
            <span className=" font-light text-[#5B5E68]">sessions</span>
          </p>
        </div>
        <p className=" text-sm text-[#5B5E68] line-through">INR {fakeprice}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-xs mt-1">
          <FeatherIcon
            className="w-[17px] mr-2 text-[#273E56]"
            icon="message-square"
          />
          <p className=" font-medium">
            {week} week{" "}
            <span className=" font-light text-[#5B5E68]">chat access</span>
          </p>
        </div>
        <p className=" text-[22px] text-[#EC7E41] font-semibold">INR {price}</p>
      </div>
    </div>
  );
};

export default Packages;
