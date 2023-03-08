import React, { useState } from "react";
import MobileLayout from "../../layouts/MobileLayout";
import Header from "../../components/Header";
import Line from "../../assets/Line 7.svg";
import Gpay from "../../assets/Gpay.svg";
import PhonePe from "../../assets/Phonepe.svg";
import { Checkbox } from "antd";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Payment = () => {
  const [select, setState] = useState(false);

  return (
    <MobileLayout>
      <Header>Payment</Header>
      <div className="w-full p-[25px] my-4 ">
        <div className="flex justify-between">
          <h2 className=" text-sm text-[#282A39] font-medium">Talk Deeper</h2>
          <div className="flex w-[220px] items-center justify-around text-[11px] font-normal">
            <p>
              12 video <span className=" text-[#5B5E68]">sessions</span>
            </p>
            <img src={Line} className=" h-5" />
            <p>
              4 week <span className="text-[#5B5E68]">chat access</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col border-[2px] border-dashed border-[#EC7E41] bg-[#F9F2E8] rounded-xl my-6 py-6">
          <div className="flex items-center justify-between mx-5 text-xs">
            <p className=" font-normal">Total</p>
            <p className=" font-medium">INR 1799 </p>
          </div>
          <div className="flex items-center justify-between mx-5 text-xs">
            <p className=" font-normal">Discount</p>
            <p className=" font-medium">-INR 800 </p>
          </div>
          <div className="flex items-center justify-between mx-5 mt-2 text-sm">
            <p className=" font-normal">To Pay</p>
            <p className=" text-[#EC7E41] font-semibold">INR 999 </p>
          </div>
        </div>
        <div className=" flex flex-col">
          <h2 className=" text-sm text-[#282A39] font-normal mt-[40px]">
            Preferred Payment
          </h2>
          <div className="flex mx-3 mb-1 mt-2  items-center ">
            <img src={Gpay} className="w-[24px] h-[24px] " />
            <p className="text-xs ml-2 mr-4">Google Pay UPI</p>
            <Checkbox
              onClick={() => setState("Gpay1")}
              checked={select === "Gpay1" ? true : false}
            />
          </div>
          <div className="flex mx-3 my-1  items-center ">
            <img src={PhonePe} className="w-[24px] h-[24px] " />
            <p className="text-xs ml-2 mr-8">PhonePe UPI</p>
            <Checkbox
              onClick={() => setState("Phonepe1")}
              checked={select === "Phonepe1" ? true : false}
            />
          </div>
        </div>
        <div className=" flex flex-col">
          <h2 className=" text-sm text-[#282A39] font-normal mt-[30px]">UPI</h2>
          <div className="flex mx-3 mb-1 mt-2 items-center ">
            <img src={Gpay} className="w-[24px] h-[24px] " />
            <p className="text-xs ml-2 mr-4">Google Pay UPI</p>
            <Checkbox
              onClick={() => setState("Gpay2")}
              checked={select === "Gpay2" ? true : false}
            />
          </div>
          <div className="flex mx-3 my-1 items-center ">
            <img src={PhonePe} className="w-[24px] h-[24px] " />
            <p className="text-xs ml-2 mr-8">PhonePe UPI</p>
            <Checkbox
              onClick={() => setState("Phonepe2")}
              checked={select === "Phonepe2" ? true : false}
            />
          </div>
          <div className="flex mx-3 my-1 items-center ">
            <div className="flex w-6 h-6 border-[#EC7E41] text-[#EC7E41] rounded-[4px] border-2 items-center justify-center">
              +
            </div>
            <div className="flex flex-col ml-2">
              <h2 className=" text-xs">Add New UPI ID</h2>
              <p className=" text-[11px] text-[#777A86]">
                You need to have a registered UPI ID
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col">
          <h2 className=" text-sm text-[#282A39] font-normal mt-[40px]">
            Credit & Debit Cards
          </h2>
          <div className="flex m-3 items-center ">
            <div className="flex w-6 h-6 border-[#EC7E41] text-[#EC7E41] rounded-[4px] border-2 items-center justify-center">
              +
            </div>
            <h2 className=" text-xs ml-2">Add New Card</h2>
          </div>
        </div>
        <div className="flex items-center justify-around mt-9 bg-[#F9F2E8] rounded-2xl h-[71px]">
          <div className="flex items-center">
            <p className=" text-[#282A39] text-xs">To Pay</p>
            <p className=" text-[#EC7E41] text-base font-medium ml-2">
              INR <span className=" font-semibold">999</span>
            </p>
          </div>
          <Link to={"/confirmation"}>
            <Button type="solid" className=" text-xs w-[160px]">
              PROCEED TO PAY
            </Button>
          </Link>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Payment;
