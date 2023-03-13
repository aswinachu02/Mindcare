import React from "react";
import homeiconbold from "../../assets/homeiconbold.svg";
import sessionbold from "../../assets/sessionbold.svg";
import chatbold from "../../assets/chatbold.svg";
import homeicon from "../../assets/homeicon.svg";
import session from "../../assets/session.svg";
import chat from "../../assets/chat.svg";
import profile from "../../assets/profile.svg";
import { Link } from "react-router-dom";
import routes from "../../utils/routes";

export const Footer = () => {
  return (
    <div className="flex fixed bottom-0 w-full justify-evenly pt-3 pb-6 bg-[#FCFBF7] text-themeColor">
      <div className="flex flex-col items-center">
        <Link to={window.location.pathname === "/home" ? null : "/home"}>
          <img
            alt="home"
            src={window.location.pathname === "/home" ? homeiconbold : homeicon}
            className=" w=[30px] h-[30px]"
          />
        </Link>

        <p className="cursor-pointer text-xs font-semibold">HOME</p>
      </div>
      <div className="flex flex-col items-center">
        <Link
          to={
            window.location.pathname === routes.SESSIONS
              ? null
              : routes.SESSIONS
          }
        >
          <img
            alt="sessions"
            src={
              window.location.pathname === routes.SESSIONS
                ? sessionbold
                : session
            }
            className=" w=[30px] h-[30px]"
          />
        </Link>
        <p className="cursor-pointer text-xs font-light">SESSIONS</p>
      </div>
      <div className="flex flex-col items-center">
        <Link to={window.location.pathname === "/chat" ? null : "/chat"}>
          <img
            alt="chats"
            src={window.location.pathname === "/chat" ? chatbold : chat}
            className=" w=[30px] h-[30px]"
          />
        </Link>

        <p className="cursor-pointer text-xs font-light">CHATS</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          alt="profile"
          src={window.location.pathname === routes.SESSIONS ? profile : profile}
          className=" w=[30px] h-[30px]"
        />
        <p className="cursor-pointer text-xs font-light">PROFILE</p>
      </div>
    </div>
  );
};

export default Footer;
