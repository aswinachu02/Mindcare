import React from "react";
import MobileLayout from "../../layouts/MobileLayout";
import Header from "../../components/Header";
import Button from "../../components/Button";
import DetailsCard from "../../components/DetailsCard";
import ReviewCard from "../../components/ReviewCard";
import Star from "../../assets/star.svg";
import Badge from "../../assets/Badge.svg";
import Line from "../../assets/Line 7.svg";
import Clock from "../../assets/Clock.svg";
import Qual from "../../assets/Qualification.svg";
import Lang from "../../assets/Lang.svg";
import About from "../../assets/About.svg";
import Spec from "../../assets/Spec.svg";
import { useNavigate } from "react-router-dom";

const SessionDetails = () => {
  let navigate = useNavigate();
  const reschedulepath = () => {
    navigate("/reschedule");
  };
  return (
    <MobileLayout>
      <Header>Session</Header>

      <div className="w-full min-h-[200px] p-[25px] my-4 ">
        <header className="flex items-start mb-3">
          <img
            src="https://www.w3schools.com/w3css/img_avatar3.png"
            className="rounded-full h-[64px] w-[64px]"
          />
          <div className="flex-1 ml-3 my-1">
            <div className="flex items-center justify-between">
              <h2 className=" text-xl font-medium">Dane Johnson</h2>
              <div className="text-xs text-[#5B5E68]">
                Session <span className="text-success">#3</span>
              </div>
            </div>
            <div className="flex items-center">
              <p className=" font-medium pt-2 text-xs text-[#101A24] ">
                65 <span className="text-[#777A86]">SESSIONS COMPLETED</span>
              </p>
              <img src={Badge} className="mt-[6px] ml-1 w-3 h-3" />
            </div>
            <div className="flex w-[75px] my-3 items-center justify-around  text-xs font-medium ">
              <p className="flex items-center">
                4.3
                <img src={Star} className=" ml-[2px] w-3 h-3 " />
              </p>
              <img src={Line} className=" h-5" />
              <h1 className="text-[#9396A0]">55</h1>
            </div>
          </div>
        </header>
        <footer className="flex text-xs">
          <Button
            type="liquid"
            className="w-full mr-2"
            onClick={reschedulepath}
          >
            RESCHEDULE
          </Button>
          <Button type="solid" className="w-full ml-2">
            JOIN SESSION
          </Button>
        </footer>
      </div>

      <div className=" flex flex-col w-[85%] m-auto p-[25px] rounded-lg  bg-[#F9F2E8]">
        <h2 className=" text-sm font-semibold mb-2">Past Sessions</h2>
        <div className="flex items-center justify-between text-xs my-1">
          <p className=" text-[#5B5E68] font-normal">
            SESSION <span className=" font-medium">#2</span>
          </p>
          <p className="text-[#111224] font-medium">
            January 20, 2023, 10:00 AM
          </p>
        </div>
        <div className="flex items-center justify-between text-xs my-1">
          <p className=" text-[#5B5E68] font-normal">
            SESSION <span className=" font-medium">#1</span>
          </p>
          <p className="text-[#111224] font-medium">
            January 15, 2023, 10:00 AM
          </p>
        </div>
      </div>

      <div className="flex flex-col w-auto px-[20px] text-sm my-5">
        <DetailsCard
          h3={<h3>Next Available at</h3>}
          p={<p>January 20, 2023, 10:00 AM</p>}
        >
          <img src={Clock} />
        </DetailsCard>

        <DetailsCard
          h3={<h3>Qualification</h3>}
          p={<p>MA in Counselling Psychology</p>}
        >
          <img src={Qual} />
        </DetailsCard>
        <DetailsCard
          h3={<h3>Languages spoken</h3>}
          p={<p>English, Hindi, Malayalam</p>}
        >
          <img src={Lang} />
        </DetailsCard>
        <DetailsCard
          h3={<h3>Specializations</h3>}
          p={
            <p>
              Stress, Anxiety, Depression, Relationship Issues, Couple
              Counseling, Grief & Loss, OCD, Bipolar Disorder, Sleep Issues,
              Cognitive Rehabilitation, Trauma, Family Therapy, Body Image, Self
              Confidence, Anger, Phobia, Eating Disorders, Marital Discord
            </p>
          }
        >
          <img src={Spec} />
        </DetailsCard>
        <DetailsCard
          h3={<h3>About</h3>}
          p={
            <p>
              Dane Johnson is an RCI licensed clinical psychologist who is
              passionate about her work and wants to make a difference in every
              life she touches. She uses various therapeutic techniques like
              REBT, CBT, and DBT in her sessions. As an advocate for mental
              health, she strongly feels that mental health goes beyond labeled
              psychiatric illnesses and that people should seek help to manage
              day-to-day stress and anxiety as well.
            </p>
          }
        >
          <img src={About} />
        </DetailsCard>
      </div>

      <div className="flex flex-col w-auto p-[25px]  mb-9 bg-[#F9F2E8]">
        <div className="flex items-center justify-between mb-2">
          <h2 className=" text-base font-medium">Reviews and Ratings</h2>
          <span className="text-[#EC7E41] px-2 text-xs">
            View all 39 reviews
          </span>
        </div>
        <ReviewCard No={<p>5</p>} Date={<p>Jan 10, 10:32 am</p>}>
          I feel so good after the therapy session. Dane is a really good
          personality and not at all judgmental.
        </ReviewCard>
        <ReviewCard No={<p>4</p>} Date={<p>Jan 10, 10:32 am</p>}>
          I feel so good after the therapy session. Dane is a really good
          personality and not at all judgmental.
        </ReviewCard>
      </div>
    </MobileLayout>
  );
};

export default SessionDetails;
