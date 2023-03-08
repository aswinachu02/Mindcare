import React from "react";
import MobileLayout from "../../layouts/MobileLayout";
import SearchBar from "../../components/SearchBar";
import Button from "../../components/Button";
import Header from "../../components/Header";

export const Filter = () => {
  return (
    <MobileLayout>
      <Header>Filter Therapist</Header>
      <div className="flex-col items-center m-auto w-[90%] ">
        <h2 className=" text-sm font-medium mt-5 mb-3">Language</h2>
        <SearchBar>Select Language</SearchBar>
        <h2 className=" text-sm font-medium mt-5 mb-3">Gender</h2>
        <SearchBar>Select Gender</SearchBar>
        <h2 className=" text-sm font-medium mt-5 mb-3">Specialization</h2>
        <SearchBar>Select Specialization</SearchBar>
        <h2 className=" text-sm font-medium mt-5 mb-3">Experience</h2>
        <SearchBar>Select Experience</SearchBar>
        <h2 className=" text-sm font-medium mt-5 mb-3">Time slot</h2>
        <SearchBar>Select Time Slot</SearchBar>
        <h2 className=" text-sm font-medium mt-5 mb-3">Date</h2>
        <SearchBar>Select Date</SearchBar>
      </div>
      <footer className="flex text-xs mt-8 mb-5">
        <Button type="liquid" className="w-full h-[48px] mr-2 ml-4">
          CLEAR
        </Button>
        <Button type="solid" className="w-full h-[48px] mr-4 ml-2">
          APPLY CHANGES
        </Button>
      </footer>
    </MobileLayout>
  );
};

export default Filter;
