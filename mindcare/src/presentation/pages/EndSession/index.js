import React, { useState } from "react";
import MobileLayout from "../../layouts/MobileLayout";
import SessionCard from "../../components/SessionCard";
import Button from "../../components/Button";
import Thankyou from "../../assets/thankyou.svg";
import { Rate } from "antd";
import { Link } from "react-router-dom";

const EndSession = () => {
  const [select, setState] = useState(false);

  return (
    <MobileLayout>
      <header className="flex items-end justify-between w-full p-[25px] my-1 ">
        <h2 className=" text-lg font-medium w-[160px]">
          Thank you! <br />
          We hope you had a good time.
        </h2>
        <img src={Thankyou} className=" w-[120px] h-[130px] mx-[15px]" />
      </header>
      <div className="w-full px-[25px] ">
        <h2 className=" text-sm font-medium">Review Time </h2>
        <div className="flex flex-col border-[2px] border-dashed border-[#EC7E41] bg-[#F9F2E8] rounded-xl my-4 p-4">
          <h2 className=" text-xs text-[#282A39]">
            What’s your review on this session?
          </h2>
          <div className="flex flex-wrap justify-evenly text-xs my-3">
            {[
              "Feels better",
              "Empowered",
              "Great session",
              "Will come again",
              " + Add your comment",
            ].map((time) => (
              <Button
                onClick={() => setState(time)}
                className="min-w-[92px] min-h-[26px] my-1 px-[6px] text-xs"
                type={select === time ? "solid" : "liquid"}
              >
                {time}
              </Button>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <Rate />
            <Button type="solid">SUBMIT</Button>
          </div>
        </div>
        <h2 className=" text-sm font-medium mt-8">Next Scheduled Session </h2>
        <div className="flex flex-col  items-center ">
          <SessionCard isbooked={true} />
          <Link to={"/home"}>
            <Button
              type="liquid"
              className="min-w-[140px] min-h-[38px] text-xs mt-3 text-[#000000]"
            >
              GO TO HOME
            </Button>
          </Link>
        </div>
      </div>
    </MobileLayout>
  );
};

export default EndSession;
