import React, { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { calcLength } from "framer-motion";

const HeroCard = (props) => {
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);

  const [userInput, setUserInput] = useState({
    address: "",
    type: "rent",
    bedrooms: 1,
    bathrooms: 1,
  });
  const { address, type, bedrooms, bathrooms } = userInput;

  function handleChange(e) {
    setUserInput((prevData) => {
      const { name, value } = e.target;
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  async function searchListings() {
    if (address === "") {
      toast.warn("Enter property address");
      return;
    }
    const capitilizedLocation = address.charAt(0).toUpperCase() + address.slice(1);
    const listingsRef = collection(db, "listings");
    const q = query(
      listingsRef,
      where("address", "==", capitilizedLocation),
      where("type", "==", type),
      where("bedrooms", "==", bedrooms.toString()),
      where("bathrooms", "==", bathrooms.toString())
    );
    const querySnap = await getDocs(q);

    //  listings = [];
    querySnap.forEach((doc) => {
      setListings(
        listings.push({
          id: doc.id,
          data: doc.data(),
        })
      );
    });
    console.log(listings);
    // return listings;
    navigate("/search", { state: { listings } });
  }

  return (
    <div className="">
      <div className="w-full flex h-auto flex-col justify-center items-center">
        <div className="w-[90%] xl:max-w-[1000px] xl:w-[90%] relative md:max-w-[900px]">
          <div className="bg-white p-10 md:p-10 lg:p-10 shadow-lg rounded-3xl">
            <div className="grid content-center md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-5 ">
              <div>
                <div className="flex gap-3 items-center">
                  <MdOutlineLocationOn className="text-3xl text-yellow-500" />
                  <label className="text-black text-xl font-bold"> Location</label>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Preferred Location"
                    className="w-full border-none text-gray-500 bg-white rounded-lg p-2  placeholder:text-gray-400 text-lg font-medium py focus:outline-none border-black"
                    onChange={handleChange}
                    id="location"
                    name="address"
                    value={address}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex gap-3 items-center">
                  {/* <TbHomeSearch className="text-3xl text-blue-600" /> */}
                  <label className="text-black text-xl font-bold"> Property Type</label>
                </div>
                <select
                  id="hs-select-label"
                  onChange={handleChange}
                  className="w-full border-none text-gray-500 bg-white rounded-lg p-1  placeholder:text-gray-400 text-xl font-medium py focus:outline-none"
                  name="type"
                  value={type}
                >
                  <option>rent</option>
                  <option>sale</option>
                </select>
              </div>

              <div className="flex flex-col">
                <div className="flex gap-3 items-center">
                  {/* <MdOutlineAttachMoney className="text-3xl text-green-500" /> */}
                  <label className="text-black text-xl font-bold">Bedrooms</label>
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Bedrooms"
                    className="w-full border-none text-gray-500 bg-white rounded-lg p-2  placeholder:text-gray-400 text-lg font-medium py focus:outline-none"
                    onChange={handleChange}
                    id="bedrooms"
                    name="bedrooms"
                    value={bedrooms}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex gap-3 items-center">
                  {/* <MdOutlineAttachMoney className="text-3xl text-green-500" /> */}
                  <label className="text-black text-xl font-bold">Bathrooms</label>
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Bathrooms"
                    className="w-full border-none text-gray-500 bg-white rounded-lg p-2  placeholder:text-gray-400 text-lg font-medium py focus:outline-none"
                    onChange={handleChange}
                    id="bathrooms"
                    name="bathrooms"
                    value={bathrooms}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="md:absolute md:right-[5%] flex items-center justify-center -translate-y-1/2">
            <button className="bg-cyan-600 px-10 py-4 text-white text-xl font-bold rounded-lg hover:bg-cyan-700" onClick={searchListings}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
