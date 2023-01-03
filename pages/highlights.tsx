import React from "react";
import { RightSide } from "../components/rightSide";

const Highlights: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <RightSide />
      <div className="lg:h-screen pt-[200px] lg:pt-0 font-display text-[20px] flex lg:pl-[200px] justify-center items-center align-middle">
        {"Nothing here yet, but I'm working on it!"}
      </div>
    </div>
  );
};

export default Highlights;
