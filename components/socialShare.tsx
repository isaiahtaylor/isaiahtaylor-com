import React, { useEffect, useMemo } from "react";
import Image from "next/image";
import { Facebook } from "./facebook";
import { Twitter } from "./twitter";
import { LinkedIn } from "./linkedin";

export const SocialShare: React.FC = () => {
  const [url, setUrl] = React.useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <div className="flex gap-[8px] h-[22px]">
      <a
        href={`https://twitter.com/intent/tweet?url=${url}`}
        target="_blank"
        rel="noreferrer"
        className="flex cursor-pointer"
      >
        <Twitter></Twitter>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        target="_blank"
        rel="noreferrer"
        className="flex cursor-pointer"
      >
        <Facebook></Facebook>
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
        target="_blank"
        rel="noreferrer"
        className="flex cursor-pointer"
      >
        <LinkedIn></LinkedIn>
      </a>
    </div>
  );
};
