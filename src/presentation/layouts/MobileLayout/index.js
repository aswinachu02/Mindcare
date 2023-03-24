import React from "react";

const MobileLayout = ({ children }) => {
  return (
    <section className="max-w-[600px] min-h-screen flex items-center justify-center">
      <div className="min-h-screen w-full m-auto">{children}</div>
    </section>
  );
};

export default MobileLayout;
