import React, { useEffect } from "react";
// import Featured from "../Layouts/About/Featured";
import MiniNav from "../components/MiniNav";
import { FaUsers, FaHeadset, FaDesktop, FaCertificate, FaShoppingCart, FaHandshake, FaKey } from "react-icons/fa";
import Footer from "../components/Footer";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Who We Are | House Hive";
  }, []);

  return (
    <div className="bg-gray-300">
      <div className="mx-auto max-w-[1280px] w-[90%] lg:p-6">
        <div className="pt-4">
          <MiniNav />
        </div>
        <div className="leading-7 text-justify">
          <div className="grid gap-12">
            <div>
              <h2 className="text-4xl text-gray-800 font-semibold lg:text-5xl mb-10 ">Our commitment to privacy</h2>
              <p className="">
                This Privacy Notice applies to the use of the Services (as defined below), including by both consumers and Professionals. “Professional(s)” means individuals,
                companies and other organizations or persons acting as real estate professionals or otherwise engaged in a business related to Move’s Services, including, without
                limitation, REALTORS®, agents, providers of moving-related services, products or information, homebuilders, lenders, brokers, real estate professionals,
                re-modelers, seniors-related housing, product or service providers, home service professionals and other service professionals. Except as otherwise indicated,
                Professionals, consumers and other persons using the Services are individually and collectively referred to as “you.”
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-3">INFORMATION WE COLLECT AND OBTAIN</h3>
              <p className="text-gray-800">
                We obtain personal information about you from a variety of sources. This includes personal information you provide to us directly, information we obtain from other
                sources, and information we gather through automated means.
                <p>
                  Information you provide to us. When you register for or participate in certain services, seek access to certain content or features, or directly correspond with
                  us, we may collect certain types of information from you:
                </p>
              </p>
              <li>Contact information (such as name, postal address, email address);</li>
              <li>Username and password when you register through our Services;</li>
              <li>Other information you may provide to us, such as through our “Submit a Request” or “Contact Us” feature.</li>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
