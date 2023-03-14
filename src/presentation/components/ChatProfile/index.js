import React from "react";
import { useNavigate } from "react-router-dom";
import Seen from "../../assets/seen.svg";

const ChatProfile = ({ name, time, img, text = "" }) => {
  let navigate = useNavigate();
  const changepath = () => {
    navigate("/chatbox");
  };
  return (
    <div className="w-full flex items-center mt-2 mb-6" onClick={changepath}>
      <img alt="chat" src={img} className="rounded-full h-[45px] w-[45px]" />
      <div className="flex-1 ml-3">
        <div className="flex items-center justify-between">
          <h2 className=" font-medium text-[#273E56]">{name}</h2>
          <p className=" text-xs text-[#526578]">{time}</p>
        </div>
        <div className="flex items-center">
          <img
            alt="seen"
            src={Seen}
            className=" w-[12px] h-[7px] mr-[2px] mt-1"
          />
          <p className="text-[11px] text-[#777A86] mt-1">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatProfile;
