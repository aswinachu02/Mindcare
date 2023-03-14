import React from "react";
import Mindcare from "../../assets/mindcare.svg";
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
        <img
          alt="mindcare"
          src={Mindcare}
          className="mt-[180px] w-[297px] h-[174px]"
        />
        <h2 className=" text-[#273E56] text-[22px] mt-[13px]">MindCare</h2>
        <p className=" text-[#5B5E68] text-sm font-light text-center w-[321px] min-h-[61px] mt-2">
          We are dedicated to helping people take care of their mental health
          and providing support for those who need it.
        </p>
        <div className=" flex items-center justify-between text-sm mt-[112px] w-full ">
          <p className=" text-white ml-[28px]">Previous</p>
          <p
            className=" text-[#273E56] underline underline-offset-2  mr-[28px]"
            onClick={() => setState("onboarding2")}
          >
            Next
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginExplore;
