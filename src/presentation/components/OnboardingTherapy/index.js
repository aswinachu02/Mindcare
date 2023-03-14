import React from "react";
import home from "../../assets/Home.svg";
import { useNavigate } from "react-router-dom";

const LoginExplore = ({ select, setState }) => {
  const navigate = useNavigate();
  const homepath = () => {
    navigate("/home");
  };
  return (
    <div className="w-full  p-[25px] my-[22px]">
      <div className="flex flex-col items-center">
        <div className="flex w-full justify-end items-center underline underline-offset-2">
          <p className=" font-light text-[#273E56] text-sm" onClick={homepath}>
            Skip
          </p>
        </div>
        <img alt="home" src={home} className="mt-[127px] w-[221px] h-[192px]" />
        <h2 className=" text-[#273E56] text-[22px] mt-[52px]">
          Therapy Sessions
        </h2>
        <p className=" text-[#5B5E68] text-sm font-light text-center w-[321px] min-h-[61px] mt-2">
          Book sessions anytime with top psychologists who are accessible 24*7
          via chat.
        </p>
        <div className=" flex items-center justify-between text-sm mt-[109px] w-full ">
          <p
            className=" text-[#273E56] underline underline-offset-2 ml-[28px]"
            onClick={() => setState("onboarding1")}
          >
            Previous
          </p>
          <p
            className=" text-[#273E56] underline underline-offset-2 mr-[28px]"
            onClick={() => setState("onboarding3")}
          >
            Next
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginExplore;
