import React from "react";
import MobileLayout from "../../layouts/MobileLayout";
import Footer from "../../components/Footer";
import ChatProfile from "../../components/ChatProfile";

const Chats = () => {
  return (
    <MobileLayout>
      <div className="w-full  p-[25px] mb-3">
        <h2 className=" text-lg font-medium text-[#111224]">Chats</h2>
        <div className="flex flex-col justify-center mt-9">
          <ChatProfile
            onClick
            img="https://www.w3schools.com/w3css/img_avatar3.png"
            name="Dane Johnson"
            time="10:00 AM"
            text="Lorem ipsum dolor sit amet consectetur. Vitae."
          />
          <ChatProfile
            img="https://www.w3schools.com/w3css/img_avatar2.png"
            name="Nate Hipster"
            time="10:00 AM"
            text="Lorem ipsum dolor sit amet consectetur. Vitae."
          />
          <ChatProfile
            img="https://www.w3schools.com/w3css/img_avatar1.png"
            name="Dhruv Segal"
            time="10:00 AM"
            text="Lorem ipsum dolor sit amet consectetur. Vitae."
          />
        </div>
      </div>
      <Footer />
    </MobileLayout>
  );
};

export default Chats;
