import React, { useState } from "react";
import MobileLayout from "../../layouts/MobileLayout";
import LoginExplore from "../../components/LoginExplore";
import LoginPhone from "../../components/LoginPhone";
import LoginOtp from "../../components/LoginOtp";

const Login = () => {
  const [select, setState] = useState("login1");
  return (
    <MobileLayout>
      {select === "login1" ? (
        <LoginExplore select={select} setState={setState} />
      ) : select === "login2" ? (
        <LoginPhone
          children={"+91 1234567890"}
          select={select}
          setState={setState}
        />
      ) : (
        <LoginOtp setState={setState} />
      )}
    </MobileLayout>
  );
};

export default Login;
