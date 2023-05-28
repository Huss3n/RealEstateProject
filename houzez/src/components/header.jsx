// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// export default function Header() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [viewstate, setViewState] = useState("Sign in");
//   const auth = getAuth();

//   function getPath(route) {
//     return location.pathname === route;
//   }

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setViewState("Profile");
//       } else {
//         setViewState("Login");
//       }
//     });
//   }, [auth]);

//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <div className="bg-white border-b shadow-sm sticky top-0 z-40">
//       <header className="flex justify-between items-center px-2 max-w-7xl mx-auto">
//         <div className="flex items-center">
//           <img
//             src={require("./logo/logo.png")}
//             alt="logo"
//             className="h-8 cursor-pointer flex-shrink-0"
//             onClick={() => {
//               closeMenu();
//               navigate("/");
//             }}
//           />
//           <span
//             className={`ml-2 mt-3 text-3xl font-bold text-red-400 cursor-pointer "hidden md:inline" : "inline"}`}
//             onClick={() => {
//               closeMenu();
//               navigate("/");
//             }}
//             style={{ fontFamily: "Zeyada, cursive" }}
//           >
//             HouseHive
//           </span>
//         </div>

//         {isMobile ? (
//           <div className="flex items-center">
//             <button className="p-2 rounded-md text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 shadow-xl" onClick={toggleMenu}>
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         ) : (
//           <ul className="flex space-x-10 my-5">
//             <li
//               className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-2 ${getPath("/") ? "border-b-red-500 text-black" : "border-b-transparent"}`}
//               onClick={() => {
//                 closeMenu();
//                 navigate("/");
//               }}
//             >
//               Home
//             </li>
//             <li
//               className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-2 ${getPath("/AllListings") ? "border-b-red-500 text-black" : "border-b-transparent"}`}
//               onClick={() => {
//                 closeMenu();
//                 navigate("/AllListings");
//               }}
//             >
//               Listings
//             </li>
//             <li
//               className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-2 ${getPath("/offers") ? "border-b-red-500 text-black" : "border-b-transparent"}`}
//               onClick={() => {
//                 closeMenu();
//                 navigate("/offers");
//               }}
//             >
//               Offers
//             </li>
//             <li
//               className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-2 ${
//                 getPath("/Login") || getPath("/profile") ? "border-b-red-500 text-black" : "border-b-transparent"
//               }`}
//               onClick={() => {
//                 closeMenu();
//                 navigate("/profile");
//               }}
//             >
//               {viewstate}
//             </li>
//             <li
//               className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-2 ${getPath("/Contacts") ? "border-b-red-500 text-black" : "border-b-transparent"}`}
//               onClick={() => {
//                 closeMenu();
//                 navigate("/Contacts");
//               }}
//             >
//               Contacts
//             </li>
//           </ul>
//         )}
//       </header>

//       {isMobile && isMenuOpen && (
//         <ul className="bg-white border-b border-gray-300 py-3 px-6 space-y-2 shadow-lg rounded-xl shadow-gray-400 opacity-75 ">
//           <li
//             className={`cursor-pointer text-sm font-semibold text-gray-500 ${getPath("/") ? " border-red-500 text-black" : "border-b-transparent"}`}
//             onClick={() => {
//               closeMenu();
//               navigate("/");
//             }}
//           >
//             Home
//           </li>
//           <li
//             className={`cursor-pointer text-sm font-semibold text-gray-500 ${getPath("/AllListings") ? "text-black" : ""}`}
//             onClick={() => {
//               closeMenu();
//               navigate("/AllListings");
//             }}
//           >
//             Listings
//           </li>
//           <li
//             className={`cursor-pointer text-sm font-semibold text-gray-500 ${getPath("/offers") ? "text-black" : ""}`}
//             onClick={() => {
//               closeMenu();
//               navigate("/offers");
//             }}
//           >
//             Offers
//           </li>
//           <li
//             className={`cursor-pointer text-sm font-semibold text-gray-500 ${getPath("/Login") || getPath("/profile") ? "text-black" : ""}`}
//             onClick={() => {
//               closeMenu();
//               navigate("/profile");
//             }}
//           >
//             {viewstate}
//           </li>
//           <li
//             className={`cursor-pointer text-sm font-semibold text-gray-500 ${getPath("/Contacts") ? "text-black" : ""}`}
//             onClick={() => {
//               closeMenu();
//               navigate("/Contacts");
//             }}
//           >
//             Contacts
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// }

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
    <div className="bg-white border-b shadow-xl sticky top-0 z-40 px-1">
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
            <button className="p-2 rounded-md text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-200" onClick={toggleMenu}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        ) : (
          <ul className="flex space-x-10 my-5">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold ${getPath("/") ? "border-b border-red-500 text-black" : "border-b-transparent text-gray-500"}`}
              onClick={() => {
                closeMenu();
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold ${getPath("/AllListings") ? "border-b border-red-500 text-black" : "border-b-transparent text-gray-500"}`}
              onClick={() => {
                closeMenu();
                navigate("/AllListings");
              }}
            >
              Listings
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold ${getPath("/offers") ? "border-b border-red-500 text-black" : "border-b-transparent text-gray-500"}`}
              onClick={() => {
                closeMenu();
                navigate("/offers");
              }}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold ${
                (getPath("/Login") || getPath("/profile")) && viewstate !== "Sign in" ? "border-b border-red-500 text-black" : "border-b-transparent text-gray-500"
              }`}
              onClick={() => {
                closeMenu();
                navigate("/profile");
              }}
            >
              {viewstate}
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold ${getPath("/Contacts") ? "border-b border-red-500 text-black" : "border-b-transparent text-gray-500"}`}
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
        <ul className="bg-white border-b border-gray-200 py-3 px-6 space-y-2">
          <li
            className={`cursor-pointer text-sm font-semibold ${getPath("/") ? "text-red-500 underline font-bold" : "text-gray-500"}`}
            onClick={() => {
              closeMenu();
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            className={`cursor-pointer text-sm font-semibold ${getPath("/AllListings") ? "text-red-500 underline font-bold" : "text-gray-500"}`}
            onClick={() => {
              closeMenu();
              navigate("/AllListings");
            }}
          >
            Listings
          </li>
          <li
            className={`cursor-pointer text-sm font-semibold ${getPath("/offers") ? "text-red-500 underline font-bold" : "text-gray-500"}`}
            onClick={() => {
              closeMenu();
              navigate("/offers");
            }}
          >
            Offers
          </li>
          <li
            className={`cursor-pointer text-sm font-semibold ${
              (getPath("/Login") || getPath("/profile")) && viewstate !== "Sign in" ? "font-bold text-red-500 underline " : "text-gray-500"
            }`}
            onClick={() => {
              closeMenu();
              navigate("/profile");
            }}
          >
            {viewstate}
          </li>
          <li
            className={`cursor-pointer text-sm font-semibold ${getPath("/Contacts") ? "text-red-500 underline font-bold" : "text-gray-500"}`}
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
