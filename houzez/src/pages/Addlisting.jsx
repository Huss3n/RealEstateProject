import React, { useState } from "react";

export default function Addlisting() {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathroom: 1,
    parking: false,
    furnished: false,
  });
  const { type, name, bedrooms, bathroom, parking, furnished } = formData;
  function onChange() {}
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Add a listing</h1>
      {/* use drop downs */}
      <form>
        <p className="text-lg mt-6 font-semibold mb-5">Sell or Rent your property</p>
        <div className="flex">
          <button
            type="button"
            id="type"
            value="sell"
            onclick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded-3xl hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "rent" ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            Sell
          </button>
          <button
            type="button"
            id="type"
            value="sell"
            onclick={onChange}
            className={` rounded-3xl ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md  hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "sell" ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            Rent
          </button>
        </div>
        <p className="tex-lg mt-6 font-semibold mb-3">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Enter property name"
          required
          maxLength={32}
          minLength={10}
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded-2xl transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-500 mb-6"
        />
        <div className="flex space-x-6 mb-5">
          <div>
            <p className="text-lg font-semibold">Beds</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={onChange}
              min={1}
              max={20}
              required
              className="px-4 py-2 text-lg text-gray-700 bg-white border-gray-700 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white text-center rounded-2xl mt-2 w-full"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Baths</p>
            <input
              type="number"
              id="bathrooms"
              value={bathroom}
              onChange={onChange}
              min={1}
              max={20}
              required
              className="px-4 py-2 text-lg text-gray-700 bg-white border-gray-700 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white text-center rounded-2xl mt-2 w-full"
            />
          </div>
        </div>
        <p className="text-lg mt-6 font-semibold mb-5">Parking spots</p>
        <div className="flex">
          <button
            type="button"
            id="parking"
            value={true}
            onclick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded-3xl hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="parking"
            value={false}
            onclick={onChange}
            className={` rounded-3xl ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md  hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            No
          </button>
        </div>

        <p className="text-lg mt-6 font-semibold mb-5">Furnished</p>
        <div className="flex">
          <button
            type="button"
            id="furnished"
            value={true}
            onclick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded-3xl hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="furnished"
            value={false}
            onclick={onChange}
            className={` rounded-3xl ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md  hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            No
          </button>
        </div>
      </form>
    </main>
  );
}
