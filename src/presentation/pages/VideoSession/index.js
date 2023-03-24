import React, { useEffect, useRef } from "react";
import MobileLayout from "../../layouts/MobileLayout";
import Videoend from "../../assets/videoend.svg";
import Videoon from "../../assets/videoon.svg";
import Micon from "../../assets/micon.svg";
import Mini from "../../assets/mini.svg";
import Flip from "../../assets/flip.svg";
import { useNavigate } from "react-router-dom";

const VideoSession = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  const handleEndCall = () => {
    navigate("/confirmation");
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <MobileLayout>
      <video ref={videoRef} className="bg-black w-full h-[88vh]" />
      <div className="fixed top-[60px] right-[24px]">
        <img
          alt="doctor"
          src="https://www.w3schools.com/w3css/img_avatar3.png"
          className="rounded-[16px] h-[130px] w-[130px]"
        />
      </div>
      <div className="flex fixed bottom-0 w-full justify-evenly items-center h-[12vh] px-[26px] bg-[#F9F2E8] rounded-tl-3xl rounded-tr-3xl">
        <img
          alt="End-Call"
          src={Videoend}
          className=" w-[52px] h-[52px] cursor-pointer"
          onClick={handleEndCall}
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
