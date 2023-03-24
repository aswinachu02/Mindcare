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
  const frontVideoRef = useRef(null);
  const backVideoRef = useRef(null);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300, facingMode: "user" } })
      .then((stream) => {
        let video = frontVideoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("error:", err);
      });
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 300, facingMode: { exact: "environment" } },
      })
      .then((stream) => {
        let video = backVideoRef.current;
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
  }, [frontVideoRef, backVideoRef]);

  return (
    <MobileLayout>
      <video ref={backVideoRef} className="bg-black w-full h-[88vh]" />
      <video
        ref={frontVideoRef}
        className="bg-[#404040] fixed top-[60px] right-[24px] rounded-[16px] w-[130px] h-[130px]"
      />
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
