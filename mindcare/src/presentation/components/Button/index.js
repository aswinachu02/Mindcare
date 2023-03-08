import React from "react";

const Button = ({ children, onClick, type, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`min-h-[38px] border-[1px] border-themeColor rounded-full ${
        type === "solid"
          ? "bg-themeColor text-white"
          : "bg-transparent text-themeColor"
      } ${
        window.location.pathname === "/slot"
          ? "min-w-[95px] "
          : "min-w-[120px] "
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
