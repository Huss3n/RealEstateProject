import React from "react";
import { FcGoogle } from "react-icons/fc";
export default function OAuth() {
  return (
    // <button className="flex items-center justify-center w-full bg-red-500 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-600 active:red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-out rounded">
    //   <FcGoogle />
    //   Continue with google
    // </button>
    <button
      className=" 
      flex
      justify-center
      w-full
      px-7
      py-3
      bg-red-400
      text-white
      font-medium
      text-sm
      leading-snug
      uppercase
      rounded
      shadow-md
      hover:bg-red-600
      hover:shadow-lg
      focus:bg-red-700
      focus:shadow-lg
      focus:outline-none
      focus:ring-0
      active:bg-red-800
      active:shadow-lg
      transition
      duration-150
      ease-in-out"
    >
      <FcGoogle className="text-xl bg-white rounded-full mr-3" />
      Continue with google
    </button>
  );
}
