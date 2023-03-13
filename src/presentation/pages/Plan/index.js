import React from "react";
import MobileLayout from "../../layouts/MobileLayout";
import Header from "../../components/Header";
import Packages from "../../components/Packages";
import { Link } from "react-router-dom";
import { Collapse } from "antd";

const { Panel } = Collapse;

const Plan = () => {
  return (
    <MobileLayout>
      <Header>Pricing & Plan</Header>
      <div className="w-full  p-[25px] my-2 ">
        <header>
          <h2 className=" text-sm font-normal text-[#282A39]">
            Choose a plan of your choice
          </h2>
          <p className=" text-xs font-normal mt-2 text-[#5B5E68]">
            Sessions bought do not expire and can be scheduled at your own
            convenience.
          </p>
        </header>

        <Packages
          title={"Explore"}
          percentage={"10"}
          video={"1"}
          week={"1"}
          fakeprice={"299"}
          price={"199"}
        />
        <Packages
          title={"Talk Better"}
          percentage={"20"}
          video={"3"}
          week={"2"}
          fakeprice={"599"}
          price={"399"}
          ismostpopular={true}
        />
        <Link to={"/payment"}>
          <Packages
            title={"Talk Deeper"}
            percentage={"40"}
            video={"12"}
            week={"4"}
            fakeprice={"1799"}
            price={"999"}
          />
        </Link>

        <div className=" mt-9 flex flex-col">
          <h2 className=" text-[#282A39] font-medium">FAQ</h2>
          <Collapse className="mt-3" accordion>
            <Panel header="Is the amount refundable?" key="1">
              <p>Yes</p>
            </Panel>
            <Panel header="Is there an EMI option for payment?" key="2">
              <p>Sure</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Plan;
