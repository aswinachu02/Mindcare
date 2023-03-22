import React from "react";
import MobileLayout from "../../layouts/MobileLayout";
import Videoend from "../../assets/videoend.svg";
import Videoon from "../../assets/videoon.svg";
import Micon from "../../assets/micon.svg";
import Mini from "../../assets/mini.svg";
import Flip from "../../assets/flip.svg";
import { useNavigate } from "react-router-dom";

const VideoSession = () => {
  const navigate = useNavigate();
  const confirmationpath = () => {
    navigate("/confirmation");
  };
  return (
    <MobileLayout>
      <div className="flex justify-end mt-[60px] mr-[24px]">
        <img
          alt="doctor"
          src="https://www.w3schools.com/w3css/img_avatar3.png"
          className="rounded-[16px] h-[130px] w-[130px]"
        />
      </div>
      <div className="flex fixed bottom-0 w-full justify-evenly items-center h-[108px] px-[26px] py-[28px] bg-[#F9F2E8] rounded-tl-3xl rounded-tr-3xl">
        <img
          alt="End-Call"
          src={Videoend}
          className=" w-[52px] h-[52px] cursor-pointer"
          onClick={confirmationpath}
        />
        <img alt="Video-On" src={Videoon} className=" w-[52px] h-[52px]" />
        <img alt="Mic-On" src={Micon} className=" w-[52px] h-[52px]" />
        <img alt="Flip-Camera" src={Flip} className=" w-[52px] h-[52px]" />
        <img alt="Minimize" src={Mini} className=" w-[52px] h-[52px]" />
      </div>
    </MobileLayout>
  );
};

export default VideoSession;
