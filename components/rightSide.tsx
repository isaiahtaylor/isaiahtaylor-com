import React from "react";
import Image from "next/image";
import { ThemeContext } from "../contexts/themeContext";
import Link from "next/link";
import MyLink from "./myLink";

export const RightSide: React.FC = () => {
  return (
    <ThemeContext.Consumer>
      {({ colorMode }) => (
        <div className="flex font-display justify-center items-center align-middle w-[600px] h-screen fixed top-0 right-0">
          <div className="flex flex-col justify-between h-screen py-[100px]">
            <div
              className="flex flex-col font-display font-bold text-2xl text-right"
              style={{
                fontVariant: "small-caps",
                fontFamily: "Playfair Display SC",
              }}
            >
              <MyLink href={"/"} text={"Home"} />
              <MyLink href={"/highlights"} text={"Highlights"} />
              <MyLink href={"/about"} text={"About"} />
            </div>
            <Link href="/">
              <Image
                src={colorMode === "dark" ? "/IT-dark.svg" : "/IT.svg"}
                alt="Isaiah Taylor"
                width={300}
                height={300}
                className="cursor-pointer"
              />
            </Link>
            <div className="flex flex-col font-display font-bold text-xl text-right">
              <a
                href="https://twitter.com/isaiah_p_taylor"
                target={"_blank"}
                rel="noreferrer"
              >
                <p>Twitter</p>
              </a>
              <a
                href="https://www.instagram.com/isaiah.p.taylor/"
                target={"_blank"}
                rel="noreferrer"
              >
                <p>Instagram</p>
              </a>
              <a
                href="https://www.linkedin.com/in/isaiahptaylor/"
                target={"_blank"}
                rel="noreferrer"
              >
                <p>LinkedIn</p>
              </a>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};
