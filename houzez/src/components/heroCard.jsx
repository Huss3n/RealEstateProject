import React, { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import SearchResultItem from "./SearchResults";
import AllListings from "../pages/AllListings";
import Footer from "./Footer";

import { Link } from "react-router-dom";
import ListingItem from "./ListingItem";
import { calcLength } from "framer-motion";

const HeroCard = ({ listing, updateListings }) => {
  const navigate = useNavigate();
  // const [listings, setListings] = useState([]);

  // Define state to hold search results
  const [searchResults, setSearchResults] = useState([]);

  // keeping track of the user search inputs
  const [userInput, setUserInput] = useState({
    address: "",
    type: "rent",
    bedrooms: 1,
    bathrooms: 1,
  });

  // destructuring the user input
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

  // search function
  async function searchListings() {
    // checking for address input
    if (address === "") {
      toast.warn("Enter property address");
      return;
    }

    // cleaning the user input
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

    const newListings = [];
    querySnap.forEach((doc) => {
      const newListing = {
        id: doc.id,
        data: doc.data(),
      };
      newListings.push(newListing);

      // Set search results in the state
      setSearchResults(newListings);

      // setListings(newListings);
      updateListings(newListings);
    });

    console.log(listing);
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

            {/* Display results in component  */}
          </div>
        </div>
      </div>
      {searchResults.length > 0 ? (
        <div className="px-4 mt-2">
          <h2 className="text-2xl text-center font-semibold mb-6">Search Results:</h2>
          <ul className="sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {searchResults.map((result) => (
              <SearchResultItem key={result.id} id={result.id} listing={result.data} />
            ))}
          </ul>
          <Footer />
        </div>
      ) : (
        <AllListings />
      )}
    </div>
  );
};

export default HeroCard;
