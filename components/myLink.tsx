import Link from "next/link";
import React from "react";

interface MyLinkProps {
  href: string;
  text: string;
  newTab?: boolean;
}

const MyLink: React.FC<MyLinkProps> = ({ href, text, newTab = false }) => {
  return (
    <div>
      <Link href={href} target={newTab ? "_blank" : "_self"}>
        <p className="cursor-pointer inline-block">{text}</p>
      </Link>
    </div>
  );
};

export default MyLink;
