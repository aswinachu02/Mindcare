import React, { useEffect, useState } from "react";
import MobileLayout from "../../layouts/MobileLayout";
import SessionCard from "../../components/SessionCard";
import Footer from "../../components/Footer";
import { useAuthStore, useSessionsStore } from "../../stores";
import { Row, Spin } from "antd";
import { timestamp } from "../../utils/time";
import moment from "moment";

const Sessions = () => {
  const [sessionType, setSessionType] = useState("upcoming");
  const [{ username }] = useAuthStore();
  const [{ loading, sessions }, { handleListSessions }] = useSessionsStore();

  useEffect(() => {
    if (sessions === null) handleListSessions(username);
  }, [sessions, username, handleListSessions]);

  return (
    <MobileLayout>
      <h2 className="my-4 w-11/12 m-auto text-lg font-medium text-[#282A39]">
        Sessions
      </h2>
      <div className="w-11/12 flex m-auto rounded-lg bg-[#E9ECEE]">
        <div
          onClick={() => setSessionType("upcoming")}
          className={`${
            sessionType === "upcoming"
              ? "bg-themeColor text-white"
              : "bg-[#E9ECEE] text-[#5B5E68]"
          } text-xs uppercase flex-[1] flex items-center justify-center rounded-lg min-h-[40px] cursor-pointer`}
        >
          Upcoming Sessions
        </div>
        <div
          onClick={() => setSessionType("past")}
          className={`${
            sessionType === "past"
              ? "bg-themeColor text-white"
              : "bg-[#E9ECEE] text-[#5B5E68]"
          } uppercase text-xs flex-[1] flex items-center justify-center rounded min-h-[40px] cursor-pointer`}
        >
          Past Sessions
        </div>
      </div>

      <div className="flex flex-col items-center mb-[80px]">
        {loading ? (
          <Row align="middle" justify="center" style={{ height: "40vh" }}>
            <Spin tip="Loading sessions" />
          </Row>
        ) : (
          sessions
            ?.filter((item) => {
              if (sessionType === "upcoming")
                return item?.stamp >= timestamp(moment());
              else if (sessionType === "past")
                return item?.stamp < timestamp(moment());
              return true;
            })
            ?.map((session, id) => (
              <SessionCard id={sessions.length - id} session={session} />
            ))
        )}
      </div>
      <Footer />
    </MobileLayout>
  );
};

export default Sessions;
