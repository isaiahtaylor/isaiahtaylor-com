import React from "react";
import Image from 'next/image';
import { Facebook } from "./facebook";
import { Twitter } from "./twitter";
import { LinkedIn } from "./linkedin";

export const SocialShare: React.FC = () => {
  return (
    <div className="flex gap-[8px] h-[22px]">
      <Twitter></Twitter>
      <Facebook></Facebook>
      <LinkedIn></LinkedIn>
    </div>
  );
}