import React from "react";
const Spinner = () => (
  <>
    <svg
      className="animate-spin h-10 w-10"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="#66BC46"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="#66BC46"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  </>
);
export default Spinner;
