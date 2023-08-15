import React from "react";
interface HomeIconProps {
  color: string;
}


export function HomeIcon({color}:HomeIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="28"
      fill="none"
      viewBox="0 0 24 28"
    >
      <path fill="#E5E5E5" d="M0 0H24V28H0z"></path>
      <g clipPath="url(#clip0_0_1)">
        <path
          fill="#fff"
          d="M0 0H1440V1024H0z"
          transform="translate(-30 -68)"
        ></path>
        <path
          fill="#F2F2F2"
          stroke="#E0E0E0"
          d="M-51.5 -8.5H219.5V955.5H-51.5z"
        ></path>
        <g>
          <g>
            <g
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M3 10.385l9-8.077 9 8.077v12.692a2.5 2.5 0 01-.586 1.632c-.375.433-.884.676-1.414.676H5c-.53 0-1.04-.244-1.414-.676A2.5 2.5 0 013 23.077V10.385z"></path>
              <path d="M9 25.385V13.846h6v11.539"></path>
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_0_1">
          <path
            fill="#fff"
            d="M0 0H1440V1024H0z"
            transform="translate(-30 -68)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export function TruckIcon({color}: HomeIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M16 3H1v13h15V3z"></path>
        <path d="M16 8h4l3 3v5h-7V8z"></path>
        <path d="M5.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
        <path d="M18.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
      </g>
    </svg>
  );
}


export function LogoutIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"></path>
        <path d="M16 17l5-5-5-5"></path>
        <path d="M21 12H9"></path>
      </g>
    </svg>
  );
}
