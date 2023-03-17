import React from "react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useNavigate } from "react-router-dom";

export const Header = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center my-4 w-11/12 m-auto ">
      <div onClick={() => navigate(-1)}>
        <FeatherIcon
          className="cursor-pointer mr-1 h-8 w-9"
          icon="chevron-left"
        />
      </div>

      <h2 className="text-lg font-medium text-[#282A39]">{children}</h2>
    </div>
  );
};

export default Header;
