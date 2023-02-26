import React, { useState } from "react";

export default function Addlisting() {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
  });
  const { type, name } = formData;
  function onChange() {}
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Add a listing</h1>
      {/* use drop downs */}
      <form>
        <p className="text-lg mt-6 font-semibold mb-2">Sell or Rent your property</p>
        <div className="flex">
          <button
            type="button"
            id="type"
            value="sell"
            onclick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "sell" ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            Sell
          </button>
          <button
            type="button"
            id="type"
            value="sell"
            onclick={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "rent" ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            Rent
          </button>
        </div>
        <p className="tex-lg mt-6 font-semibold mb-2">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Enter property name"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded-2xl transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-500 mb-6"
        />
      </form>
    </main>
  );
}
