import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate(); // used to navigate to the clicked item. kinda adds an event listener
  //   console.log(location.pathname);

  // function getPath(route) {
  //   if (route === location.pathname) {
  //     return true;
  //   }
  // }
  function getPath(route) {
    return location.pathname === route;
  }

  return (
    <div className="bg-white border-b shadow-sm sticky-top-0 z-50">
      <header className="flex just justify-between items-center px-2 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img src={require("./logo/logo.png")} alt="logo" className="h-8 cursor-pointer flex-shrink-0" onClick={() => navigate("/")} />
          <span className="ml-2 mt-3 text-3xl font-bold text-red-400 cursor-pointer" onClick={() => navigate("/")} style={{ fontFamily: "Zeyada, cursive" }}>
            HouzeHive
          </span>
        </div>

        {/* <div>
          <ul className="flex space-x-10 my-5">
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-2 border-b-transparent ${getPath("/") && "text-black border-b-red-500"}`}>Home</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-2 border-b-transparent ${getPath("/offers") && "text-black border-b-red-500"}`}>
              Offers
            </li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-2 border-b-transparent ${getPath("/signIn") && "text-black border-b-red-500"}`}>
              Sign In
            </li>
          </ul>
        </div> */}

        <ul className="flex space-x-10 my-5">
          <li
            className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-2 ${getPath("/") ? "border-b-red-500 text-black" : "border-b-transparent"}`}
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-2 ${getPath("/offers") ? "border-b-red-500 text-black" : "border-b-transparent"}`}
            onClick={() => navigate("/offers")}
          >
            Offers
          </li>
          <li
            className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-2 ${getPath("/Login") ? "border-b-red-500 text-black" : "border-b-transparent"}`}
            onClick={() => navigate("/Login")}
          >
            Log In
          </li>
        </ul>
      </header>
    </div>
  );
}
