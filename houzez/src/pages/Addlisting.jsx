import React, { useState } from "react";

export default function Addlisting() {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathroom: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: true,
    regularPrice: 0,
    discountedPrice: 0,
  });
  const { type, name, bedrooms, bathroom, parking, furnished, address, description, offer, regularPrice, discountedPrice } = formData;
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
        <p className="tex-lg mt-6 font-semibold mb-3">Address</p>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="Enter property address"
          required
          maxLength={60}
          minLength={10}
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded-2xl transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-500"
        />
        <p className="tex-lg mt-6 font-semibold mb-3">Description</p>
        <input
          type="text"
          id="description"
          value={description}
          onChange={onChange}
          placeholder="Enter property description"
          required
          maxLength={32}
          minLength={10}
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded-2xl transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-500 mb-6"
        />
        <p className="text-lg font-semibold mb-5">Offer</p>
        <div className="flex mb-6">
          <button
            type="button"
            id="offer"
            value={true}
            onclick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded-3xl hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="offer"
            value={false}
            onclick={onChange}
            className={` rounded-3xl ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md  hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            No
          </button>
        </div>
        {/* regular price  */}
        <div>
          <div className="">
            <p className="text-lg font-semibold"> Regular price</p>
            <div className="flex w-full justify-center items-center space-x-8 mt-3">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                max={50}
                min={500000000}
                required
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-3xl transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-500 text-center"
              />
              {type === "rent" && (
                <div>
                  <p className="text-md w-full whitespace-nowrap">Kshs / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {offer && (
          <div>
            <div className="">
              <p className="text-lg font-semibold mt-3"> Discounted price</p>
              <div className="flex w-full justify-center items-center space-x-8 mt-3">
                <input
                  type="number"
                  id="discountedPrice"
                  value={discountedPrice}
                  onChange={onChange}
                  max={50}
                  min={500000000}
                  required={offer}
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-3xl transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-500 text-center"
                />
                {type === "rent" && (
                  <div>
                    <p className="text-md w-full whitespace-nowrap">Kshs / Month</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* image  */}
        <div className="mb-6 mt-4">
          <p className="text-lg font-semibold">Images</p>
          {/* modify this for iphone photos  */}
          <p className="text-gray-400">The first image will be the cover and the (max 8)</p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg, .png, .jpeg"
            multiple
            required
            className="w-full px-3 py-2 text-gray-800 bg-white border border-gray-300 rounded-2xl transition duration-150 ease-in-out focus:bg-white focus:border-blue-200"
          />
        </div>
        <button
          type="submit"
          className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded-2xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Add Listing
        </button>
      </form>
    </main>
  );
}
