import React from "react";
import Button from "../Button";
import FeatherIcon from "feather-icons-react";
import { useNavigate } from "react-router-dom";

const SessionCard = ({ isbooked }) => {
  let navigate = useNavigate();
  const reschedulepath = () => {
    navigate("/reschedule");
  };
  const sessionpath = () => {
    navigate("/sessions");
  };

  return (
    <div className="w-11/12 min-h-[200px] p-[25px] my-4 rounded-lg shadow-lg bg-[#F9F2E8]">
      <header className="flex items-center">
        <img
          src="https://www.w3schools.com/w3css/img_avatar3.png"
          className="rounded-full h-[50px] w-[50px]"
        />
        <div className="flex-1 ml-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-medium">John Doe</h2>
            <div className="text-xs">
              Session <span className="text-success">#3</span>
            </div>
          </div>
          <p className="text-xs mt-1">
            January <span className="font-medium">20</span>, 2023,{" "}
            <span className="font-medium">10:00 AM</span>
          </p>
        </div>
      </header>
      <div>
        <div className="flex items-center text-xs mt-5 mb-1">
          <FeatherIcon className="w-[15px] mr-2 text-[#5B5E68]" icon="users" />
          <span className="font-medium pr-1">2 video </span> sessions left
        </div>
        <div className="flex items-center text-xs mb-5 mt-1">
          <FeatherIcon
            className="w-[15px] mr-2 text-[#5B5E68]"
            icon="message-square"
          />
          <span className="font-medium pr-1">2 week</span> chat access
        </div>
      </div>
      {isbooked === true ? (
        <footer className="flex text-xs">
          <Button type="liquid" className="w-full mr-2">
            CANCEL
          </Button>
          <Button type="solid" className="w-full ml-2" onClick={reschedulepath}>
            RESCHEDULE
          </Button>
        </footer>
      ) : (
        <footer className="flex text-xs">
          <Button
            type="liquid"
            className="w-full mr-2"
            onClick={reschedulepath}
          >
            RESCHEDULE
          </Button>
          <Button type="solid" className="w-full ml-2" onClick={sessionpath}>
            JOIN SESSION
          </Button>
        </footer>
      )}
    </div>
  );
};

export default SessionCard;
