import React from "react";

function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <path
        d="M 10,10 L 190,10 L 190,190 L 10,190 Z"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="4"
      />
      <path d="M 20,100 L 100,20 L 180,100 L 100,180 Z" fill="#000000" />
    </svg>
  );
}

export default Logo;
