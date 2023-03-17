import React, { useEffect } from "react";
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
import { Link, useParams } from "react-router-dom";
import { useSessionsStore } from "../../stores";
import LoadAndResult from "../../components/LoadAndResult";
import moment from "moment";
import { capitalize } from "../../utils/string";

const Therapist = () => {
  const { d_uname } = useParams();
  const [{ loadingSelectedDoctor, selectedDoctor }, { handleGetDoctor }] =
    useSessionsStore();

  useEffect(() => {
    if (d_uname) handleGetDoctor(d_uname);
  }, [handleGetDoctor, d_uname]);

  return (
    <MobileLayout>
      <Header>Therapist</Header>
      <LoadAndResult
        loading={loadingSelectedDoctor}
        loadingText="Loading doctor..."
        isNotFound={!selectedDoctor}
        notFoundText="Doctor not found!"
      >
        <>
          <div className=" flex w-auto  min-h-[250px] p-[25px]  ">
            <div className="flex-[1] flex-col ">
              <img
                alt="therapist"
                src="https://www.w3schools.com/w3css/img_avatar3.png"
                className="rounded-full h-[137px] w-[137px]"
              />
              <div className="flex w-[100px] ml-4 h-[27px] my-3 items-center justify-around  text-xs font-medium border-[1px] border-themeColor rounded-full">
                <p className="flex items-center">
                  4.3
                  <img alt="star" src={Star} className=" ml-[2px] w-3 h-3 " />
                </p>
                <img alt="line" src={Line} className=" h-5" />
                <h1 className="text-[#9396A0]">55</h1>
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className=" text-xl font-medium">{selectedDoctor?.name}</h2>
              <div className="flex items-center">
                <p className=" font-medium pt-2 text-xs text-[#101A24] ">
                  {selectedDoctor?.bookings?.length ?? 0}{" "}
                  <span className="text-[#777A86]">SESSIONS COMPLETED</span>
                </p>
                <img
                  alt="badge"
                  src={Badge}
                  className="mt-[6px] ml-1 w-3 h-3"
                />
              </div>
              <p className=" text-[#777A86] text-xs font-normal">
                Starting at{" "}
                <span className="text-[#EC7E41] text-base font-semibold pl-1">
                  INR {selectedDoctor?.rate}
                </span>
              </p>
              <Link to={"/slot"}>
                <Button
                  type="solid"
                  className="w-[90%] my-2 text-xs font-medium"
                >
                  BOOK SESSION
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col w-auto px-[20px] text-sm mb-4">
            <DetailsCard
              h3={<h3>Next Available at</h3>}
              p={
                <p>
                  {moment().add(2, "hours").format("MMMM DD YYYY, hh:00 A")}
                </p>
              }
            >
              <img alt="clock" src={Clock} />
            </DetailsCard>

            <DetailsCard
              h3={<h3>Qualification</h3>}
              p={
                <p>
                  {selectedDoctor?.degree} in {selectedDoctor?.specialization}
                </p>
              }
            >
              <img alt="qual" src={Qual} />
            </DetailsCard>
            <DetailsCard
              h3={<h3>Languages spoken</h3>}
              p={
                <p>
                  {(selectedDoctor?.languages ?? ["english"])
                    ?.map((l) => capitalize(l))
                    ?.join(",")}
                </p>
              }
            >
              <img alt="lang" src={Lang} />
            </DetailsCard>
            <DetailsCard
              h3={<h3>Specializations</h3>}
              p={
                <p>
                  Stress, Anxiety, Depression, Relationship Issues, Couple
                  Counseling, Grief & Loss, OCD, Bipolar Disorder, Sleep Issues,
                  Cognitive Rehabilitation, Trauma, Family Therapy, Body Image,
                  Self Confidence, Anger, Phobia, Eating Disorders, Marital
                  Discord
                </p>
              }
            >
              <img alt="spec" src={Spec} />
            </DetailsCard>
            <DetailsCard
              h3={<h3>About</h3>}
              p={<p>{selectedDoctor?.about ?? "N.A"}</p>}
            >
              <img alt="about" src={About} />
            </DetailsCard>
          </div>

          <div className="flex flex-col w-auto p-[25px] bg-[#F9F2E8]">
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
        </>
      </LoadAndResult>
    </MobileLayout>
  );
};

export default Therapist;
