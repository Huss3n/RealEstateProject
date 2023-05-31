import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-10 bg-cyan-600 text-black text-lg">
      <hr className="border-red-500 shadow-lg" />
      <div className="container mx-auto px-6 lg:px-0 xl:px-0">
        <footer className="py-2 text-white mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <a href="/" className="flex items-center space-x-2">
                <img src={require("./logo/logo.png")} className="h-7 cursor-pointer flex-shrink-0" alt="HouseHive Logo" />
                <span className="ml-2 text-3xl font-bold text-red-400 cursor-pointer" onClick={() => navigate("/")} style={{ fontFamily: "Zeyada, cursive" }}>
                  HouseHive
                </span>
              </a>
              <p className="text-white mt-2">Find comfort in the house with us. Looking for a home? We are ready to help you wholeheartedly based on your needs.</p>
            </div>

            <div>
              <span className="footer-title text-black underline">Services</span>
              <ul className="mt-2 space-y-2">
                <li>
                  {/* only if authenticated  */}
                  <a className="link link-hover hover:text-red-500" href="/">
                    Sell
                  </a>
                </li>

                {/* only if authenticated  */}
                <li>
                  <a className="link link-hover hover:text-red-500" href="/AllListings">
                    Rent
                  </a>
                </li>
                <li>
                  <a className="link link-hover hover:text-red-500" href="/AllListings">
                    Buy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="footer-title text-black underline">Legals</span>
              <ul className="mt-2 space-y-2">
                <li>
                  <a className="link link-hover hover:text-red-500" href="/Terms-of-use">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a className="link link-hover hover:text-red-500" href="/privacy-policy">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            {/* office */}

            <div className="hidden md:block">
              <span className="footer-title text-black underline">Office</span>
              <ul className="mt-2 space-y-2">
                <li>JKUAT Towers,</li>
                <li>Nairobi,</li>
                <li>Kenya.</li>
              </ul>
            </div>
          </div>
        </footer>
        <footer className="bg-cyan-600 text-white text-lg">
          <hr className="border-red-500" />
          <div className="flex items-center justify-center py-4">
            <span className="text-lg text-white">
              © {new Date().getFullYear()}{" "}
              <a href="/" className="hover:underline">
                HouseHive
              </a>{" "}
              ™. All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
