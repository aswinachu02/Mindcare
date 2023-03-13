import React, { useState } from "react";
import MobileLayout from "../../layouts/MobileLayout";
import OnboardingLanding from "../../components/OnboardingLanding";
import OnboardingTherapy from "../../components/OnboardingTherapy";
import OnboardingPrivacy from "../../components/OnboardingPrivacy";

const Login = () => {
  const [select, setState] = useState("onboarding1");
  return (
    <MobileLayout>
      {select === "onboarding1" ? (
        <OnboardingLanding select={select} setState={setState} />
      ) : select === "onboarding2" ? (
        <OnboardingTherapy select={select} setState={setState} />
      ) : (
        <OnboardingPrivacy setState={setState} />
      )}
    </MobileLayout>
  );
};

export default Login;
