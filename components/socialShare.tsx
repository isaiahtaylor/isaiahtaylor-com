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
      <Twitter url={url}></Twitter>
      <Facebook url={url}></Facebook>
      <LinkedIn url={url}></LinkedIn>
    </div>
  );
};
