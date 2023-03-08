import React from "react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

export const SearchBar = ({ children }) => {
  return (
    <div className="flex items-center justify-between min-h-[38px] w-full border-[1px] border-[#BCC3CB] rounded-xl ">
      <input
        className="text-[#B4B5BE] text-xs font-medium ml-4"
        type="submit"
        value={children}
      />
      <FeatherIcon className="m-3 w-4" icon="x" />
    </div>
  );
};

export default SearchBar;
