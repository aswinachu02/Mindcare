import React from "react";
import privacy from "../../assets/Privacy.svg";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

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
          alt="privacy"
          src={privacy}
          className="mt-[142px] w-[198px] h-[179px]"
        />
        <h2 className=" text-[#000000] text-[22px] mt-[49px]">
          Your Privacy is our Priority
        </h2>
        <p className=" text-[#5B5E68] text-sm font-light text-center w-[321px] min-h-[61px] mt-2">
          We won’t use any of your data for our gains. Your data is encrypted
          and securely stored in our servers and are not accessible to the open
          world.
        </p>
        <div className=" flex items-center justify-between text-sm mt-[90px] w-full ">
          <p
            className=" text-[#273E56] underline underline-offset-2 ml-[28px]"
            onClick={() => setState("onboarding2")}
          >
            Previous
          </p>
          <p className=" text-white mr-[28px]">Next</p>
        </div>
        <Button
          onClick={homepath}
          className="flex items-center justify-center w-[325px] text-sm font-medium mt-[42px]"
          type="solid"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
};

export default LoginExplore;
