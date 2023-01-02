import React from "react";
import { RightSide } from "../components/rightSide";
import { ThemeContext } from "../contexts/themeContext";

const Highlights: React.FC = () => {
  return (
    <ThemeContext.Consumer>
      {({ colorMode }) => (
        <div className="flex">
          <div className="h-screen font-display text-[20px] flex pl-[200px] justify-center items-center align-middle">
            {"Nothing here yet, but I'm working on it!"}
          </div>
          <RightSide />
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Highlights;
