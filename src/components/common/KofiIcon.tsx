import React from "react";

export function KofiIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 6.5C3 5.67 3.67 5 4.5 5H15.5C16.33 5 17 5.67 17 6.5V13C17 16.31 14.31 19 11 19H9C5.69 19 3 16.31 3 13V6.5Z"
        fill="#FFFFFF"
      />
      <path
        d="M17 7.5H18.5C20.43 7.5 22 9.07 22 11C22 12.93 20.43 14.5 18.5 14.5H17"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M10 9.8C9.4 9.1 8.4 9.1 7.8 9.7C7.2 10.3 7.2 11.3 7.8 11.9L10 14.1L12.2 11.9C12.8 11.3 12.8 10.3 12.2 9.7C11.6 9.1 10.6 9.1 10 9.8Z"
        fill="#FF5E5B"
      />
    </svg>
  );
}
