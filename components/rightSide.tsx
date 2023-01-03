import React from "react";
import Image from "next/image";
import Link from "next/link";
import MyLink from "./myLink";

export const RightSide: React.FC = () => {
  return (
    <div className="flex font-display justify-center items-center lg:items-end lg:justify-end lg:w-[600px] lg:pr-[100px] lg:h-screen lg:fixed lg:top-0 lg:right-0">
      <div className="flex flex-col justify-center items-center pt-10 lg:items-end lg:justify-between lg:h-screen lg:py-[100px]">
        <div
          className="flex gap-1 lg:gap-0 lg:flex-col font-display font-bold text-2xl text-right"
          style={{
            fontVariant: "small-caps",
            fontFamily: "Playfair Display SC",
          }}
        >
          <MyLink href={"/"} text={"Home"} />
          <span className="lg:hidden">&middot;</span>
          <MyLink href={"/highlights"} text={"Highlights"} />
          <span className="lg:hidden">&middot;</span>
          <MyLink href={"/about"} text={"About"} />
        </div>
        <Link href="/">
          <div className="h-[200px] w-[200px] relative lg:w-[300px] lg:h-[300px]">
            <div className="hidden dark:block">
              <Image
                src="/IT-dark.svg"
                alt="Isaiah Taylor"
                layout="fill"
                className="cursor-pointer"
              />
            </div>
            <div className="dark:hidden">
              <Image
                src="/IT.svg"
                alt="Isaiah Taylor"
                layout="fill"
                className="cursor-pointer"
              />
            </div>
          </div>
        </Link>
        <div className="flex flex-row gap-1 lg:gap-0 lg:flex-col font-display font-bold text-xl text-right">
          <a
            href="https://twitter.com/isaiah_p_taylor"
            target={"_blank"}
            rel="noreferrer"
          >
            <p>Twitter</p>
          </a>
          <span className="lg:hidden">&middot;</span>
          <a
            href="https://www.instagram.com/isaiah.p.taylor/"
            target={"_blank"}
            rel="noreferrer"
          >
            <p>Instagram</p>
          </a>
          <span className="lg:hidden">&middot;</span>
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
  );
};
