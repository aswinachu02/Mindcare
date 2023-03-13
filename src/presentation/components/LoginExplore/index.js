import React from "react";
import Logo from "../../assets/logo.svg";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Button from "../Button";
import { Link } from "react-router-dom";

const LoginExplore = ({ select, setState }) => {
  return (
    <div className="w-full  p-[25px] my-[22px]">
      <div className="flex flex-col items-center">
        <img src={Logo} className="mt-[104px]" />
        <h2 className=" text-xl text-[#273E56] font-medium mt-[-30px] ml-1">
          mind<span className=" text-[#EC7E41] font-normal">care.</span>
        </h2>
        <p className=" text-xs text-[#273E56] mt-1">
          Elevate your mind with mindcare.
        </p>
        <Button
          onClick={() => setState("login2")}
          className=" flex items-center justify-center w-[325px] text-sm font-medium mt-20"
          type="solid"
        >
          <FeatherIcon icon="phone" className="h-[15px] w-[15px] mr-[18px]" />
          <h2>CONTINUE WITH PHONE </h2>
        </Button>
        <div className=" flex items-center mt-6 mb-4">
          <div className=" flex-1 bg-[#9396A0] h-[2px] w-[52px] mr-[2px]" />
          <p className=" text-[#9396A0] text-[11px]">OR</p>
          <div className=" flex-1 bg-[#9396A0] h-[2px] w-[52px] ml-[2px]" />
        </div>
        <Link to={"/home"}>
          <p className=" text-sm text-[#273E56] underline underline-offset-2">
            Skip and Explore App
          </p>
        </Link>

        <div className="text-[11px] text-[#777A86] mt-[110px] text-center w-[240px]">
          By Signing Up I agree to mindcare’s Terms and Conditions and Privacy
          Policy
        </div>
      </div>
    </div>
  );
};

export default LoginExplore;
