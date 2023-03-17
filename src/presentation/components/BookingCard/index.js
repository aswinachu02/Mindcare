import React from "react";
import Button from "../Button";
import Star from "../../assets/star.svg";
import Badge from "../../assets/Badge.svg";
import Line from "../../assets/Line 7.svg";
import { useNavigate } from "react-router-dom";
import { capitalize } from "../../utils/string";
import moment from "moment";
import routes from "../../utils/routes";

const BookingCard = ({ doctor }) => {
  let navigate = useNavigate();

  return (
    <div className="w-11/12 min-h-[250px] p-[25px] my-4 rounded-lg shadow-lg bg-[#F9F2E8]">
      <header className="flex items-center">
        <img
          alt="doctor"
          src="https://www.w3schools.com/w3css/img_avatar3.png"
          className="rounded-full h-[64px] w-[64px]"
        />
        <div className="flex-col ml-3 w-full">
          <div className="flex items-center justify-between">
            <h2 className=" font-semibold text-base">
              {capitalize(doctor?.name)}
            </h2>
            <div className="flex w-[100px] pl-4 items-center justify-around  text-xs font-medium">
              <p className="flex items-center">
                4.3
                <img alt="star" src={Star} className=" ml-[2px] w-3 h-3 " />
              </p>
              <img alt="line" src={Line} className=" h-5" />
              <h1 className="text-[#9396A0]">55</h1>
            </div>
          </div>
          <h3 className="text-[#5B5E68] font-normal text-[11px]">
            {doctor?.degree} in {doctor?.specialization}
          </h3>
          <div className="flex items-center">
            <p className=" font-medium pt-2 text-xs text-[#777A86]">
              SESSIONS COMPLETED{" "}
              <span className="text-[#101A24]">
                {doctor?.bookings?.length ?? 0}
              </span>
            </p>
            <img
              alt="badge"
              src={Badge}
              className="mt-[6px] ml-2 w-3 h-3"
            ></img>
          </div>
        </div>
      </header>
      <div className="flex flex-col my-6 w-full">
        <p className=" text-xs font-normal text-[#5B5E68] ">
          Anxiety, Depression, Stress , Relation.....{" "}
          <span className="text-[#23384E] font-semibold">Show more</span>
        </p>
        <div className=" flex justify-between mt-4 font-extralight text-xs text-[#777A86]">
          <p>Next Available</p>
          <p className="px-3">Starting at</p>
        </div>
        <div className=" flex items-center justify-between mt-1 font-semibold text-xs">
          <p>{moment().add(2, "hours").format("MMMM DD YYYY, hh:00 A")}</p>
          <p className=" text-[#EC7E41] px-3 text-sm ">
            INR <span className="text-base">{doctor?.rate}</span>
          </p>
        </div>
      </div>
      <footer className="flex text-xs mt-1">
        <Button
          type="liquid"
          className="w-full mr-2"
          onClick={() => navigate(routes.VIEW_DOCTOR(doctor?.username))}
        >
          VIEW PROFILE
        </Button>
        <Button
          type="solid"
          className="w-full ml-2 "
          onClick={() => navigate(routes.NEW_SESSION_SLOT(doctor?.username))}
        >
          BOOK SESSION
        </Button>
      </footer>
    </div>
  );
};

export default BookingCard;
