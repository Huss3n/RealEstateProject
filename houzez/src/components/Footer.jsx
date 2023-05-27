import React from "react";

const Footer = ({ setAuth, isAuthenticated }) => {
  return (
    <div className="mt-10 bg-cyan-600 text-black text-lg flex flex-wrap">
      <hr className="border-gray-200 shadow-lg" />
      <div className="mb-2 flex flex-col max-w-[1280px] mx-auto px-6 lg:px-0 xl:px-0 gap-3 bg-cyan-600">
        <footer className="footer py-4 text-white mt-10 ">
          <div className="md:place-self-center md:justify-self-center ">
            <div className="grid grid-flow-col gap-4">
              <div className="flex flex-col mb-10 md:mb-5 max-w-lg items-start px-4 pl-0">
                <div className="flex items-center">
                  <a href="/" className="mb-10 md:mb-5 flex items-center space-x-2">
                    <img src={require("./logo/logo.png")} className="h-7 cursor-pointer flex-shrink-0" alt="HouseHive Logo" id="logo" />
                  </a>
                  <label htmlFor="logo">House Hive</label>
                </div>
                <div className="text-white">Find comfort in the house with us, want to find a home? we are ready to help you wholeheartedly based on what you need.</div>
              </div>

              <div className="flex items-center justify-center space-y-4">
                <div className="text-white flex flex-col pl-0">
                  <span className="footer-title pl-0">Services</span>
                  {/* if authenticated then goto /sell else goto /login */}
                  {isAuthenticated ? (
                    <a className="link link-hover" href="/sell">
                      Sell
                    </a>
                  ) : (
                    <a className="btn-disabled text-gray-400">Sell</a>
                  )}
                  <a className="link link-hover" href="/rent">
                    Rent
                  </a>
                  <a className="link link-hover" href="/buy">
                    Buy
                  </a>
                </div>

                {/* Legals */}
                <div className="text-white flex flex-col space-x-4 items-center">
                  <a className="link link-hover" href="terms">
                    Terms of use
                  </a>
                  <a className="link link-hover" href="privacy-policy">
                    Privacy policy
                  </a>
                  <a className="link link-hover" href="cookie">
                    Cookie policy
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-end text-white">
                <span className="footer-title text-lg underline">Office</span>
                <p className="text-white">JKUAT Towers</p>
                <p className="text-white">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </footer>
        <footer className="footer bg-cyan-600 text-white text-lg">
          <hr className=" border-red-500" />
          <div className="flex flex-col items-center justify-between">
            <span className="text-lg text-white sm:text-center dark:text-white">
              © {new Date().getFullYear()}{" "}
              <a href="/" className="hover:underline">
                HouseHive
              </a>
              ™. All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
