import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./presentation/pages/Home";
import Landing from "./presentation/pages/Landing";
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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/upcomingsessions" element={<Sessions />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/therapist" element={<Therapist />} />
        <Route path="/sessions" element={<SessionDetails />} />
        <Route path="/slot" element={<Slot />} />
        <Route path="/reschedule" element={<Reschedule />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/endsession" element={<EndSession />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/chat" element={<Chats />} />
        <Route path="/chatbox" element={<ChatBox />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </Router>
  );
};

export default App;
