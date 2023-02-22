import React from "react";
import load from "../assets/svg/load.svg";

export default function Loading() {
  return (
    <div className="flex items-center bg-white opacity-50 justify-center fixed left-0 right-0 bottom-0 top-0 z-50">
      <div>
        <img src={load} alt="loading" className="h-24" />
      </div>
    </div>
  );
}
