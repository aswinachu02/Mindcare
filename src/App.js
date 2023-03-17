import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./presentation/pages/Home";
import Sessions from "./presentation/pages/Sessions";
import Booking from "./presentation/pages/Booking";
import Filter from "./presentation/pages/Filterpage";
import Therapist from "./presentation/pages/Therapist";
import SessionDetails from "./presentation/pages/SessionDetails";
import Slot from "./presentation/pages/Slot";
import Reschedule from "./presentation/pages/Reschedule";
import Plan from "./presentation/pages/Plan";
import Payment from "./presentation/pages/Payment";
import EndSession from "./presentation/pages/EndSession";
import Confirmation from "./presentation/pages/Confirmation";
import Chats from "./presentation/pages/Chats";
import ChatBox from "./presentation/pages/ChatBox";
import Login from "./presentation/pages/Login";
import Onboarding from "./presentation/pages/Onboarding";
import routes from "./presentation/utils/routes";
import AdminLogin from "./presentation/pages/Admin/Login";
import AdminAddDoctor from "./presentation/pages/Admin/AddDoctor";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path={routes.SESSIONS} element={<Sessions />} />
        <Route path={routes.NEW_SESSION} element={<Booking />} />
        <Route path="/filter" element={<Filter />} />
        <Route path={routes.VIEW_DOCTOR(":d_uname")} element={<Therapist />} />
        <Route
          path={routes.VIEW_SESSION(":sid")}
          element={<SessionDetails />}
        />
        <Route path={routes.NEW_SESSION_SLOT(":d_uname")} element={<Slot />} />
        <Route path="/reschedule" element={<Reschedule />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/endsession" element={<EndSession />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/chat" element={<Chats />} />
        <Route path="/chatbox" element={<ChatBox />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />

        <Route path={routes.ADMIN} element={<AdminLogin />} />
        <Route path={routes.ADMIN_LOGIN} element={<AdminLogin />} />
        <Route path={routes.ADMIN_ADD_DOCTOR} element={<AdminAddDoctor />} />
      </Routes>
    </Router>
  );
};

export default App;
