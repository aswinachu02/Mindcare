import React, { useEffect } from "react";
import MobileLayout from "../../layouts/MobileLayout";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Send from "../../assets/send.svg";
import IncomingMessages from "../../components/IncomingMessages";
import OutgoingMessages from "../../components/OutgoingMessages";

const ChatBox = () => {
  useEffect(() => {
    var objDiv = document.getElementById("messages");
    objDiv.scrollTop = objDiv.scrollHeight;
  }, []);

  return (
    <MobileLayout>
      <header className="flex items-center justify-between py-5 w-11/12 m-auto h-[10vh]">
        <div className="flex items-center">
          <FeatherIcon className=" mr-1 h-8 w-9" icon="chevron-left" />
          <div className="flex items-center">
            <img
              src={"https://www.w3schools.com/w3css/img_avatar3.png"}
              className="rounded-full h-[38px] w-[38px]"
            />
            <div className="flex-1 ml-3 mt-1">
              <h2 className=" font-medium text-lg">{"Dane Johnson"}</h2>
              <p className="text-xs text-[#404252] ">{"5 more days"}</p>
            </div>
          </div>
        </div>
        <FeatherIcon className="h-8" icon="more-vertical" />
      </header>

      <div
        className=" flex flex-col w-full p-[25px] h-[80vh] overflow-auto"
        id="messages"
      >
        <IncomingMessages
          time="10:00 AM"
          children="Lorem ipsum dolor sit amet consectetur. Volutpat consequat consequat ultricies."
        />
        <OutgoingMessages
          time="10:00 AM"
          children="Lorem ipsum dolor sit amet consectetur. "
        />
        <IncomingMessages
          time="10:00 AM"
          children="Lorem ipsum dolor sit amet consectetur. Volutpat consequat consequat ultricies."
        />
        <OutgoingMessages
          time="10:00 AM"
          children="Lorem ipsum dolor sit amet consectetur. "
        />
        <IncomingMessages
          time="10:00 AM"
          children="Lorem ipsum dolor sit amet consectetur. Volutpat consequat consequat ultricies."
        />
        <OutgoingMessages
          time="10:00 AM"
          children="Non sed ultricies amet dictum odio  "
        />
        <IncomingMessages
          time="10:00 AM"
          children="Lorem ipsum dolor sit amet consectetur. Volutpat consequat consequat ultricies."
        />
        <OutgoingMessages
          time="10:00 AM"
          children="Lorem ipsum dolor sit amet consectetur. "
        />
        <IncomingMessages
          time="10:00 AM"
          children="Lorem ipsum dolor sit amet consectetur. Tellus suspendisse "
        />
        <OutgoingMessages
          time="10:00 AM"
          children="Purus neque sed habitant pretium eget  "
        />
        <IncomingMessages
          time="10:00 AM"
          children="Pretium aliquet curabitur orci sed magna vulputate. Diam congue arcu et posuere eget maecenas condimentum. Urna nam sapien nullam euismod. Facilisi nullam sed vel amet diam. "
        />
        <OutgoingMessages
          time="10:00 AM"
          children="Lorem ipsum dolor sit amet consectetur. Ullamcorper eget orci netus interdum. "
        />
      </div>

      <footer className="h-[10vh] bg-white">
        <div className=" flex justify-between fixed bottom-0 w-[87%] mb-6 mx-[25px]">
          <div className="flex items-center  min-h-[38px] w-[85%] border-[1px] border-[#273E56] rounded-full ">
            <FeatherIcon
              icon="smile"
              className=" w-5 h-5 ml-4 text-[#898580]"
            />
            <input
              className="text-[#B4B5BE] text-xs font-medium ml-3"
              type="submit"
              value="Message"
            />
          </div>
          <img src={Send} className="w-[40px] h-[40px]" />
        </div>
      </footer>
    </MobileLayout>
  );
};

export default ChatBox;
