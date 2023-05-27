import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate(); // used to navigate to the clicked item. kinda adds an event listener
  //   console.log(location.pathname);

  // function getPath(route) {
  //   if (route === location.pathname) {
  //     return true;
  //   }
  // }
  // get the state of the user and set it to sign in for a new user, if user is signed in we need to change it to profile
  const [viewstate, setViewState] = useState("Sign in");
  const auth = getAuth();
  function getPath(route) {
    return location.pathname === route;
  }

  // changes the header to profile when user is authenticated and to login when not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setViewState("Profile");
      } else {
        setViewState("Login");
      }
    });
  }, [auth]);

  return (
    <div className="bg-white border-b shadow-sm sticky-top-0 z-40">
      <header className="flex just justify-between items-center px-2 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img src={require("./logo/logo.png")} alt="logo" className="h-8 cursor-pointer flex-shrink-0" onClick={() => navigate("/")} />
          <span className="ml-2 mt-3 text-3xl font-bold text-red-400 cursor-pointer" onClick={() => navigate("/")} style={{ fontFamily: "Zeyada, cursive" }}>
            HouseHive
          </span>
        </div>

        <ul className="flex space-x-10 my-5">
          <li
            className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-2 ${getPath("/") ? "border-b-red-500 text-black" : "border-b-transparent"}`}
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-2 ${getPath("/AllListings") ? "border-b-red-500 text-black" : "border-b-transparent"}`}
            onClick={() => navigate("/AllListings")}
          >
            Listings
          </li>
          <li
            className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-2 ${getPath("/offers") ? "border-b-red-500 text-black" : "border-b-transparent"}`}
            onClick={() => navigate("/offers")}
          >
            Offers
          </li>
          <li
            className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-2 ${
              getPath("/Login") || getPath("/profile") ? "border-b-red-500 text-black" : "border-b-transparent"
            }`}
            onClick={() => navigate("/profile")}
          >
            {viewstate}
          </li>

          <li
            className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-2 ${getPath("/Contacts") ? "border-b-red-500 text-black" : "border-b-transparent"}`}
            onClick={() => navigate("/Contacts")}
          >
            Contacts
          </li>
        </ul>
      </header>
    </div>
  );
}
