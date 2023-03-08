import React from "react";
import MobileLayout from "../../layouts/MobileLayout";
import SessionCard from "../../components/SessionCard";
import Footer from "../../components/Footer";

const Sessions = () => {
  return (
    <MobileLayout>
      <h2 className="my-4 w-11/12 m-auto text-lg font-medium text-[#282A39]">
        Sessions
      </h2>
      <div className="w-11/12 flex m-auto bg-[#E9ECEE]">
        <div className="bg-themeColor text-white text-xs uppercase flex-[1] flex items-center justify-center rounded-lg min-h-[40px] cursor-pointer">
          Upcoming Sessions
        </div>
        <div className="bg-[#E9ECEE] text-[#5B5E68] uppercase text-xs flex-[1] flex items-center justify-center rounded min-h-[40px] cursor-pointer">
          Past Sessions
        </div>
      </div>

      <div className="flex flex-col items-center mb-[80px]">
        <SessionCard />
        <SessionCard />
        <SessionCard />
        <SessionCard />
        <SessionCard />
        <SessionCard />
      </div>
      <Footer />
    </MobileLayout>
  );
};

export default Sessions;
