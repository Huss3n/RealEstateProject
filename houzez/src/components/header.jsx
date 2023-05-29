import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [viewstate, setViewState] = useState("Sign in");
  const auth = getAuth();

  function getPath(route) {
    return location.pathname === route;
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setViewState("Profile");
      } else {
        setViewState("Login");
      }
    });
  }, [auth]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-cyan-700 border-b shadow-xl sticky top-0 z-40 px-1">
      <header className="flex justify-between items-center px-2 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img
            src={require("./logo/logo.png")}
            alt="logo"
            className="h-8 cursor-pointer flex-shrink-0"
            onClick={() => {
              closeMenu();
              navigate("/");
            }}
          />
          <span
            className={`ml-2 mt-3 text-3xl font-bold text-red-400 cursor-pointer `}
            onClick={() => {
              closeMenu();
              navigate("/");
            }}
            style={{ fontFamily: "Zeyada, cursive" }}
          >
            HouseHive
          </span>
        </div>

        {isMobile ? (
          <div className="flex items-center">
            <button className="p-2 rounded-md text-black hover:bg-cyan-700 focus:outline-none focus:bg-cyan-700" onClick={toggleMenu}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        ) : (
          <ul className="flex space-x-10 my-5">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold ${getPath("/") ? "border-b border-red-500 text-black" : "border-b-transparent text-white"}`}
              onClick={() => {
                closeMenu();
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold ${getPath("/AllListings") ? "border-b border-red-500 text-black" : "border-b-transparent text-white"}`}
              onClick={() => {
                closeMenu();
                navigate("/AllListings");
              }}
            >
              Listings
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold ${getPath("/offers") ? "border-b border-red-500 text-black" : "border-b-transparent text-white"}`}
              onClick={() => {
                closeMenu();
                navigate("/offers");
              }}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold ${
                (getPath("/Login") || getPath("/profile")) && viewstate !== "Sign in" ? "border-b border-red-500 text-black" : "border-b-transparent text-white"
              }`}
              onClick={() => {
                closeMenu();
                navigate("/profile");
              }}
            >
              {viewstate}
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold ${getPath("/Contacts") ? "border-b border-red-500 text-black" : "border-b-transparent text-white"}`}
              onClick={() => {
                closeMenu();
                navigate("/Contacts");
              }}
            >
              Contacts
            </li>
          </ul>
        )}
      </header>

      {isMobile && isMenuOpen && (
        <ul className="bg-cyan-700 border-b border-cyan-200 py-3 px-6 space-y-2">
          <li
            className={`cursor-pointer text-sm font-semibold ${getPath("/") ? "text-red-500 underline font-bold" : "text-white "}`}
            onClick={() => {
              closeMenu();
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            className={`cursor-pointer text-sm font-semibold ${getPath("/AllListings") ? "text-red-500 underline font-bold" : "text-white "}`}
            onClick={() => {
              closeMenu();
              navigate("/AllListings");
            }}
          >
            Listings
          </li>
          <li
            className={`cursor-pointer text-sm font-semibold ${getPath("/offers") ? "text-red-500 underline font-bold" : "text-white"}`}
            onClick={() => {
              closeMenu();
              navigate("/offers");
            }}
          >
            Offers
          </li>
          <li
            className={`cursor-pointer text-sm font-semibold ${
              (getPath("/Login") || getPath("/profile")) && viewstate !== "Sign in" ? "font-bold text-red-500 underline " : "text-white"
            }`}
            onClick={() => {
              closeMenu();
              navigate("/profile");
            }}
          >
            {viewstate}
          </li>
          <li
            className={`cursor-pointer text-sm font-semibold ${getPath("/Contacts") ? "text-red-500 underline font-bold" : "text-white"}`}
            onClick={() => {
              closeMenu();
              navigate("/Contacts");
            }}
          >
            Contacts
          </li>
        </ul>
      )}
    </div>
  );
}
