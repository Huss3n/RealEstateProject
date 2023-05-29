import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineLocationOn, MdOutlineAttachMoney } from "react-icons/md";
// import { TbHomeSearch } from "react-icons/tb";
// import axios from "axios";
// import { SERVER_URL } from "../../Config";
// import { db } from "../firebase";
// import { collection, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore";
// import Loading from "../components/Loading";

const HeroCard = () => {
  // const [data, setData] = useState({
  //   location: "",
  //   propertyType: "House",
  //   listingType: "Rent",
  //   minPrice: "",
  //   maxPrice: "",
  // });
  // const searchProperty = async () => {
  //   try {
  //     //   const response = await
  //     //   setSearchData(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // console.log(searchData);

  // console.log(data);

  // async function fetchListings() {
  //   try {
  //     const listingRef = collection(db, "listings");
  //     const q = query(listingRef, where("offer", "==", true), orderBy("timestamp", "desc"), limit(8));
  //     const querySnap = await getDocs(q);
  //     const lastVisible = querySnap.docs[querySnap.docs.length - 1];
  //     setLastFetchListing(lastVisible);
  //     const listings = [];
  //     querySnap.forEach((doc) => {
  //       return listings.push({
  //         id: doc.id,
  //         data: doc.data(),
  //       });
  //     });
  //     setListings(listings);
  //     setLoading(false);
  //   } catch (error) {
  //     toast.error("Could not fetch listing");
  //   }
  // }
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setData((prevData) => ({ ...prevData, [name]: value }));
  //   console.log(name);
  // };

  const [userInput, setUserInput] = useState({
    location: "",
    type: "Rent",
    rooms: 1,
    baths: 1,
  });

  const { location, type, rooms, baths } = userInput;

  function handleChange(e) {
    setUserInput((prevData) => {
      const { name, value } = e.target;
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function searchProperty() {
    console.log(userInput);
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
                    className="w-full border-none text-gray-500 bg-white rounded-lg p-2  placeholder:text-gray-400 text-lg font-medium py focus:outline-none"
                    onChange={handleChange}
                    id="location"
                    name="location"
                    value={location}
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
                  <option>Rent</option>
                  <option>Buy</option>
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
                    name="rooms"
                    value={rooms}
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
                    name="baths"
                    value={baths}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="md:absolute md:right-[5%] flex items-center justify-center -translate-y-1/2">
            <button className="bg-cyan-600 px-10 py-4 text-white text-xl font-bold rounded-lg hover:bg-cyan-700" onClick={searchProperty}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
