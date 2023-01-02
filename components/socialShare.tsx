import React from "react";
import Image from "next/image";
import { Facebook } from "./facebook";
import { Twitter } from "./twitter";
import { LinkedIn } from "./linkedin";

export const SocialShare: React.FC = () => {
  return (
    <div className="flex gap-[8px] h-[22px]">
      <a
        href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
        target="_blank"
        rel="noreferrer"
        className="flex cursor-pointer"
      >
        <Twitter></Twitter>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
        target="_blank"
        rel="noreferrer"
        className="flex cursor-pointer"
      >
        <Facebook></Facebook>
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
        target="_blank"
        rel="noreferrer"
        className="flex cursor-pointer"
      >
        <LinkedIn></LinkedIn>
      </a>
    </div>
  );
};
