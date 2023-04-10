import { useState } from "react";

export default function Addlisting() {
  const [formData, setFormData] = useState({
    type: "rent",
    propertyName: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    regularPrice: 1,
    discountedPrice: 1,
  });
  const { type, propertyName, bedrooms, bathrooms, parking, furnished, address, description, offer, regularPrice, discountedPrice } = formData;
  function onChange() {}
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Add new listing</h1>
      <form>
        <p className="text-lg mt-6 font-semibold mb-2">Sell / Rent</p>
        <div className="flex mt-3">
          {/* sale button  */}
          <button
            type="button"
            id="type"
            value="sale"
            className={`mr-3 px-7 py-2 font-medium text-sm uppercase shadow-lg rounded-2xl hover:shadow-lg focus:shadow-lg active:shadow-xl transition duration-150 ease-in-out w-full ${
              type === "rent" ? "text-black bg-white" : "bg-blue-500 text-white"
            }`}
            onClick={onChange}
          >
            Sell
          </button>

          {/* rent button  */}
          <button
            type="button"
            id="type"
            value="sale"
            className={`ml-3 px-7 py-2 font-medium text-sm uppercase shadow-lg rounded-2xl hover:shadow-lg focus:shadow-lg active:shadow-xl transition duration-150 ease-in-out w-full ${
              type === "sale" ? "text-black bg-white" : "bg-blue-500 text-white"
            }`}
            onClick={onChange}
          >
            Rent
          </button>
        </div>

        {/* property name  */}
        <p className="tect-lg mt-6 font-semibold mb-2">Name</p>
        <input
          type="text"
          id="name"
          value={propertyName}
          onChange={onChange}
          placeholder="Enter property name"
          maxLength={36}
          minLength={10}
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-xl transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6 active:border-slate-600"
        />

        {/* bedrooms and bathrooms buttons  */}
        <div className="flex space-x-6 mb-6">
          <div>
            <p className="text-lg font-semibold mb-2">Beds</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={onChange}
              min={1}
              required
              className="px-4 py-2 text-lg text-gray-300 bg-white border border-gray-700 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center rounded-xl w-full"
            />
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">Bathrooms</p>
            <input
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={onChange}
              min={1}
              required
              className="px-4 py-2 text-lg text-gray-300 bg-white border border-gray-700 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center rounded-xl w-full"
            />
          </div>
        </div>

        {/* parking spots button  */}
        <p className="text-lg mt-6 font-semibold mb-2">Parking spot</p>
        <div className="flex mt-3">
          {/* sale button  */}
          <button
            type="button"
            id="parking"
            value={true}
            className={`mr-3 px-7 py-2 font-medium text-sm uppercase shadow-lg rounded-2xl hover:shadow-lg focus:shadow-lg active:shadow-xl transition duration-150 ease-in-out w-full ${
              !parking ? "text-black bg-white" : "bg-blue-500 text-white"
            }`}
            onClick={onChange}
          >
            Yes
          </button>

          {/* rent button  */}
          <button
            type="button"
            id="parking"
            value={false}
            className={`ml-3 px-7 py-2 font-medium text-sm uppercase shadow-lg rounded-2xl hover:shadow-lg focus:shadow-lg active:shadow-xl transition duration-150 ease-in-out w-full ${
              parking ? "text-black bg-white" : "bg-blue-500 text-white"
            }`}
            onClick={onChange}
          >
            No
          </button>
        </div>

        {/* furnished section  */}
        <p className="text-lg mt-6 font-semibold mb-2">Furnished</p>
        <div className="flex mt-3">
          {/* sale button  */}
          <button
            type="button"
            id="furnished"
            value={true}
            className={`mr-3 px-7 py-2 font-medium text-sm uppercase shadow-lg rounded-2xl hover:shadow-lg focus:shadow-lg active:shadow-xl transition duration-150 ease-in-out w-full ${
              !furnished ? "text-black bg-white" : "bg-blue-500 text-white"
            }`}
            onClick={onChange}
          >
            yes
          </button>

          {/* rent button  */}
          <button
            type="button"
            id="furnished"
            value={false}
            className={`ml-3 px-7 py-2 font-medium text-sm uppercase shadow-lg rounded-2xl hover:shadow-lg focus:shadow-lg active:shadow-xl transition duration-150 ease-in-out w-full ${
              furnished ? "text-black bg-white" : "bg-blue-500 text-white"
            }`}
            onClick={onChange}
          >
            no
          </button>
        </div>

        {/* address section  */}
        <p className="text-lg font-semibold mt-2 mb-2">Address</p>
        <textarea
          type="text"
          value={address}
          id="address"
          required
          onChange={onChange}
          placeholder="Enter property address"
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-xl transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-2 active:border-slate-600"
        />

        {/* description section  */}
        <p className="text-lg font-semibold mb-2">Description</p>
        <textarea
          type="text"
          value={description}
          id="description"
          required
          onChange={onChange}
          placeholder="Enter property description"
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-xl transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-2 active:border-slate-600"
        />

        {/* offers section  */}
        <p className="text-lg font-semibold mb-2">Offer</p>
        <div className="flex">
          {/* sale button  */}
          <button
            type="button"
            id="offer"
            value={true}
            className={`mr-3 px-7 py-2 font-medium text-sm uppercase shadow-lg rounded-2xl hover:shadow-lg focus:shadow-lg active:shadow-xl transition duration-150 ease-in-out w-full ${
              !offer ? "text-black bg-white" : "bg-blue-500 text-white"
            }`}
            onClick={onChange}
          >
            yes
          </button>

          {/* rent button  */}
          <button
            type="button"
            id="offer"
            value={false}
            className={`ml-3 px-7 py-2 font-medium text-sm uppercase shadow-lg rounded-2xl hover:shadow-lg focus:shadow-lg active:shadow-xl transition duration-150 ease-in-out w-full ${
              offer ? "text-black bg-white" : "bg-blue-500 text-white"
            }`}
            onClick={onChange}
          >
            no
          </button>
        </div>

        {/* regular price section  */}
        <div className="flex items-center mb-6">
          <div className="">
            <p className="text-lg font-semibold mt-3">Regular price</p>
            <div className="flex w-full justify-center items-center space-x-6">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                min={50}
                required
                className="mt-2 rounded-xl text-center w-full px-4 -y-2 text-xl text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600"
              />
              {type === "rent" && (
                <div className="">
                  <p className="text-md-full whitespace-nowrap">Kshs / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* discounted price section  */}
        {offer && (
          <div className="flex items-center mb-6">
            <div className="">
              <p className="text-lg font-semibold mt-3">Discounted price</p>
              <div className="flex w-full justify-center items-center space-x-6">
                <input
                  type="number"
                  id="discountedPrice"
                  value={discountedPrice}
                  onChange={onChange}
                  min={50}
                  required={offer} // req if offer is true
                  className="mt-2 rounded-xl text-center w-full px-4 -y-2 text-xl text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600"
                />
                {type === "rent" && (
                  <div className="">
                    <p className="text-md-full whitespace-nowrap">Kshs / Month</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* images section  */}
        <div className="mb-6">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-500">The first image will be the cover image</p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            required
            accept=".jpg, .png, .jpeg, .heif, .heic"
            multiple
            className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-xl transition duration-150 ease-in-out focus:bg-white focus:border-slate-500"
          />
        </div>
        <button
          type="submit"
          className="mb-3 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl focus:shadow-xl active:bg-blue-800 active:shadow-2xl transition duration-150 ease-in-out"
        >
          Create Listing
        </button>
      </form>
    </main>
  );
}
