import React from "react";
import Logo from "../../assets/logo.svg";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

const LoginExplore = ({ setState }) => {
  const navigate = useNavigate();
  const homepath = () => {
    navigate("/home");
  };
  const [otp, setotp] = useState("");
  const handleFocusChange = (currVal, nextId) => {
    setotp(otp + currVal);
    const nextInput = document.getElementById(nextId);
    nextInput.focus();
  };

  return (
    <div className="w-full  p-[25px] my-4">
      <div className="flex flex-col items-center">
        <div onClick={() => setState("login2")} className="flex w-full">
          <FeatherIcon className=" mr-1 h-8 w-9" icon="chevron-left" />
        </div>
        <img src={Logo} className=" mt-[-73px]" />
        <h2 className=" font-medium text-[#282A39] text-[17px] mt-[3px]">
          Verify you phone number
        </h2>
        <p className=" text-sm text-[#5B5E68] text-center w-[275px] mt-2">
          Enter the 6-digit code you just received on phone.
        </p>
        <div className="flex w-[270px] mt-[60px] justify-evenly">
          <input
            type="password"
            id="input1"
            onChange={(e) => handleFocusChange(e.target.value, "input2")}
            className=" border-b-[1px] border-[#5B5E68] w-[29px] text-center text-sm"
          />
          <input
            type="password"
            id="input2"
            onChange={(e) => handleFocusChange(e.target.value, "input3")}
            className=" border-b-[1px] border-[#5B5E68] w-[29px] text-center text-sm"
          />
          <input
            type="password"
            id="input3"
            onChange={(e) => handleFocusChange(e.target.value, "input4")}
            className=" border-b-[1px] border-[#5B5E68] w-[29px] text-center text-sm"
          />
          <input
            type="password"
            id="input4"
            onChange={(e) => handleFocusChange(e.target.value, "input5")}
            className=" border-b-[1px] border-[#5B5E68] w-[29px] text-center text-sm"
          />
          <input
            type="password"
            id="input5"
            onChange={(e) => handleFocusChange(e.target.value, "input6")}
            className=" border-b-[1px] border-[#5B5E68] w-[29px] text-center text-sm"
          />
          <input
            type="password"
            id="input6"
            className=" border-b-[1px] border-[#5B5E68] w-[29px] text-center text-sm"
          />
        </div>
        <div className=" w-[288px] mt-6 text-xs flex items-center justify-between">
          <p className="text-[#404252]">Code send to +91 1234567890 </p>
          <p className=" text-[#273E56] font-medium">Send Again(29s)</p>
        </div>
        <Button
          onClick={homepath}
          className=" flex items-center justify-center w-[325px] text-sm font-medium mt-[52px]"
          type="solid"
        >
          <h2>VERIFY</h2>{" "}
        </Button>
      </div>
    </div>
  );
};

export default LoginExplore;
