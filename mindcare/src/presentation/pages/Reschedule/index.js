import React, { useState } from "react";
import MobileLayout from "../../layouts/MobileLayout";

import Button from "../../components/Button";
import { Calendar } from "antd";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const Reschedule = () => {
  const [select, setState] = useState(false);
  let navigate = useNavigate();
  const sessionpath = () => {
    navigate("/sessions");
  };
  return (
    <MobileLayout>
      <Header>Reschedule Slot</Header>
      <div className="w-full  p-[25px] my-4 ">
        <header className="flex items-start">
          <img
            src="https://www.w3schools.com/w3css/img_avatar3.png"
            className="rounded-full h-[64px] w-[64px]"
          />
          <div className="flex-1 ml-3 my-3 ">
            <h2 className=" text-base text-[#101A24] font-medium">
              Dane Johnson
            </h2>
            <p className=" text-xs text-[#5B5E68]">MA in Clinical Psychology</p>
          </div>
        </header>
        <p className=" my-4 text-xs text-[#5B5E68] font-light">
          Next Available on
          <span className=" text-[#111224] font-medium ml-2">
            January 20 2023, 10:00 AM
          </span>
        </p>
        <h2 className="text-[#282A39] text-sm mt-6">Choose a day</h2>

        <Calendar className=" bg-[#FCFBF7] shadow-lg mt-2" fullscreen={false} />
      </div>
      <div className="w-full  px-[25px] ">
        <h2 className=" text-sm text-[#282A39] font-medium">
          Choose a time slot
        </h2>

        <div className="flex flex-wrap justify-evenly text-xs my-3 mx-0">
          {[
            "9:00 AM",
            "10:00 AM",
            "11:00 AM",
            "1:00 PM",
            "2:00 PM",
            "3:00 PM",
          ].map((time) => (
            <Button
              onClick={() => setState(time)}
              className="min-w-[88px] h-[30px] my-2 "
              type={select === time ? "solid" : "liquid"}
            >
              {time}
            </Button>
          ))}
        </div>
      </div>

      <footer className="flex text-xs mt-8 mb-5">
        <Button
          type="liquid"
          className="w-full h-[48px] mr-2 ml-4"
          onClick={sessionpath}
        >
          CANCEL
        </Button>
        <Button type="solid" className="w-full h-[48px] mr-4 ml-2">
          RESCHEDULE
        </Button>
      </footer>
    </MobileLayout>
  );
};

export default Reschedule;
