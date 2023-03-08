import React from "react";
import Logo from "../../assets/logo.svg";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Button from "../Button";

const LoginExplore = ({ children, setState }) => {
  return (
    <div className="w-full  p-[25px] my-4">
      <div className="flex flex-col items-center">
        <div onClick={() => setState("login1")} className="flex w-full">
          <FeatherIcon className=" mr-1 h-8 w-9" icon="chevron-left" />
        </div>
        <img src={Logo} className=" mt-[-73px]" />
        <h2 className=" font-medium text-[#282A39] text-[17px] mt-[3px]">
          Please enter you phone number
        </h2>
        <div className=" mt-16">
          <input
            className=" font-medium text-[#111224]"
            type="submit"
            value={children}
          />
        </div>
        <p className=" text-xs text-[#5B5E68] text-center mt-4">
          This phone number is for account verification and we won’t be sharing
          it with any one. You can trust us.
        </p>
        <Button
          onClick={() => setState("login3")}
          className=" flex items-center justify-center w-[325px] text-sm font-medium mt-[85px]"
          type="solid"
        >
          <h2>SEND OTP</h2>{" "}
        </Button>
      </div>
    </div>
  );
};

export default LoginExplore;
