import React, { useEffect } from "react";
import MobileLayout from "../../layouts/MobileLayout";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import BookingCard from "../../components/BookingCard";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { useSessionsStore } from "../../stores";
import LoadAndResult from "../../components/LoadAndResult";

export const Booking = () => {
  const [{ doctors, loadingDoctors }, { handleListDoctors }] =
    useSessionsStore();

  useEffect(() => {
    handleListDoctors();
  }, [handleListDoctors]);

  return (
    <MobileLayout>
      <Header>Book a new session</Header>
      <div className="flex items-center m-auto w-11/12 ">
        <div className="flex items-center min-h-[38px] w-[90%] border-[1px] border-[#BCC3CB] rounded-xl ">
          <FeatherIcon className="m-3 w-5" icon="search" />
          <input
            className="text-[#B4B5BE] text-xs font-medium"
            type="submit"
            value="Search Therapist by Name"
          />
        </div>
        <Link to={"/filter"}>
          <FeatherIcon className="text-[#526578] ml-2" icon="filter" />
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <LoadAndResult
          loading={loadingDoctors}
          loadingText="Loading doctors..."
          isEmpty={!doctors || doctors?.length === 0}
          emptyText="No doctors found!"
        >
          {doctors?.map((doctor, i) => (
            <BookingCard doctor={doctor} key={i} />
          ))}
        </LoadAndResult>
      </div>
    </MobileLayout>
  );
};

export default Booking;
