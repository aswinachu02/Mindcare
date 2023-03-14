import React from "react";
import MobileLayout from "../../layouts/MobileLayout";
import Successful from "../../assets/successful.svg";
import FeatherIcon from "feather-icons-react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export const Confirmation = () => {
  return (
    <MobileLayout>
      <div className="w-full  p-[25px] mb-3">
        <img alt="successful" src={Successful} />
        <div className="flex flex-col items-center mt-4">
          <h2 className=" text-xl text-success mb-9">Payment successful</h2>
          <p className=" text-xs text-[#404252]">
            Your Session with{" "}
            <span className=" font-semibold">Dane Johnson</span> is scheduled on
          </p>
          <p className=" text-sm text-[#404252]">
            January <b className="font-semibold">20</b>, 2023,{" "}
            <b className="font-semibold">10:00 AM</b>
          </p>
          <div className="flex flex-col w-full min-h-[100px] p-[20px] my-8 bg-[#F9F2E8] rounded-2xl">
            <h2 className=" text-sm font-medium">Talk Deeper</h2>
            <div className="flex items-center text-xs mt-2">
              <FeatherIcon
                className="w-[17px] mr-2 text-[#273E56]"
                icon="users"
              />
              <p className=" font-medium">
                12 video
                <span className=" font-light text-[#5B5E68] ml-1">
                  sessions
                </span>
              </p>
            </div>
            <div className="flex items-center text-xs ">
              <FeatherIcon
                className="w-[17px] mr-2 text-[#273E56]"
                icon="message-square"
              />
              <p className=" font-medium">
                4 week
                <span className=" font-light text-[#5B5E68] ml-1">
                  chat access
                </span>
              </p>
            </div>
          </div>
          <Link to={"/home"}>
            <Button type="solid" className=" text-xs w-[160px] h-[38px] mt-5">
              GO TO HOME
            </Button>
          </Link>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Confirmation;
