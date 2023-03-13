import React from "react";

const DetailsCard = ({ children, h3, p = "" }) => {
  return (
    <div className="flex mt-2 mb-4 ">
      <div className="w-[31px] h-[31px]">{children}</div>
      <div className="flex flex-col justify-center ml-5 my-1 w-11/12">
        <h3 className="text-[#777A86] font-semibold">{h3}</h3>
        <p className="text-[#282A39] font-normal mt-3">{p}</p>
      </div>
    </div>
  );
};

export default DetailsCard;
