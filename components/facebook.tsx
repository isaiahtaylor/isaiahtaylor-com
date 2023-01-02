import React from "react";

interface Props {
  url: string;
}

export const Facebook: React.FC<Props> = ({ url }) => {
  return (
    <svg
      onClick={() => {
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${url}`,
          "_blank"
        );
      }}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <path
        d="M20 4C11.164 4 4 11.164 4 20C4 28.0213 9.90933 34.6453 17.608 35.8027V24.24H13.6493V20.0347H17.608V17.236C17.608 12.6027 19.8653 10.5693 23.716 10.5693C25.56 10.5693 26.536 10.7067 26.9973 10.768V14.4387H24.3707C22.736 14.4387 22.1653 15.9893 22.1653 17.736V20.0347H26.956L26.3067 24.24H22.1653V35.836C29.9747 34.7773 36 28.1 36 20C36 11.164 28.836 4 20 4Z"
        fill="currentColor"
      />
    </svg>
  );
};
