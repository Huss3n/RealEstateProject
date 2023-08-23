// SearchResultItem.js
import React from "react";

export default function SearchResultItem({ listing }) {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-xl">
      {/* Display the relevant listing information here */}
      <img src={listing.imgUrls[0]} alt="" className="h-[170px] w-full object-cover" />
      <h3 className="text-xl font-bold mt-2">{listing.propertyName}</h3>
      {/* Add more details as needed */}
    </div>
  );
}
